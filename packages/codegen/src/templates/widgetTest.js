import { WidgetType } from "../gir/widgetType"

const primitiveTestValues = {
  string: '"Some String"',
  boolean: "true",
  number: "1",
}

function getEnumerationTestValues(gir) {
  const testValues = {}

  for (const enumeration of gir.enumerations) {
    const type = new WidgetType(enumeration.$.name, gir)
    const member = enumeration.member[0].$.name.toUpperCase()
    testValues[type.name] = `${type.name}.${member}`
  }

  return testValues
}

function getBitfieldTestValues(gir) {
  const testValues = {}

  for (const bitfield of gir.bitfields) {
    const type = new WidgetType(bitfield.$.name, gir)
    const member = bitfield.member[0].$.name.toUpperCase()
    testValues[type.name] = `${type.name}.${member}`
  }

  return testValues
}

function getClassTestValues(gir) {
  const testValues = {}

  for (const widgetClass of gir.widgetClasses) {
    testValues[widgetClass.type.name] = `new ${widgetClass.type.name}()`

    for (const prop of widgetClass.props) {
      if (prop.type.isPrimitive) {
        continue
      }

      testValues[prop.type.name] = `new ${prop.type.name}()`
    }
  }

  return testValues
}

function getTestValue(prop, gir) {
  const testValues = {
    ...primitiveTestValues,
    ...getClassTestValues(gir),
    ...getEnumerationTestValues(gir),
    ...getBitfieldTestValues(gir),
  }

  return testValues[prop.type.name]
}

export default function (widgetClass, gir) {
  let ts = ""

  ts += `import { ${widgetClass.name} } from "../../../src/generated/widgets.js"\n`

  for (const import_ of widgetClass.imports) {
    ts += `import ${import_.name} from "${import_.moduleName}"\n`
  }

  ts += "\n"

  ts += `describe("${widgetClass.name}", () => {\n`
  ts += "  let widget\n"
  ts += "  let node\n"
  ts += "\n"
  ts += "  beforeEach(() => {\n"
  ts += "    node = new " + widgetClass.type.name + "()\n"
  ts += `    ${widgetClass.type.name}.mockImplementation(() => node)\n`
  ts += `    widget = new ${widgetClass.name}({})\n`
  ts += "  })\n"
  ts += "\n"

  if (widgetClass.constructOnlyProps.length > 0) {
    ts += "test('should set construct only props', () => {\n"
    ts += "  const props = {\n"

    for (const prop of widgetClass.constructOnlyProps) {
      ts += `    ${prop.name}: ${getTestValue(prop, gir)},\n`
    }

    ts += "  }\n"
    ts += "\n"
    ts += "  new " + widgetClass.name + "(props)\n"
    ts += "\n"
    ts += `  expect(${widgetClass.type.name}).toHaveBeenCalledWith(props)\n`
    ts += "})\n"
    ts += "\n"
  }

  for (const prop of widgetClass.settableProps) {
    ts += `  test("should set ${prop.name}", () => {\n`
    ts += `    const newValue = ${getTestValue(prop, gir)}\n`
    ts += `    widget.set("${prop.name}", newValue)\n`

    if (prop.setter) {
      ts += `    expect(node.${prop.setter}).toHaveBeenCalledWith(newValue)\n`
    } else {
      ts += `    expect(node.${prop.name}).toBe(newValue)\n`
    }

    ts += "  })\n"
    ts += "\n"
  }

  for (const signal of widgetClass.signals) {
    ts += `  test("should connect ${signal.name}", () => {\n`
    ts += `    const callback = jest.fn()\n`
    ts += `    widget.set("${signal.name}", callback)\n`
    ts += `    const handler = widget.handlers["${signal.rawName}"]\n`
    ts += `    expect(handler).toBeDefined()\n`
    ts += `    handler()\n`
    ts += `    expect(node.on).toHaveBeenCalledWith("${signal.rawName}", expect.any(Function))\n`
    ts += `    expect(callback).toHaveBeenCalled()\n`
    ts += "  })\n"
    ts += "\n"
  }

  for (const prop of widgetClass.props) {
    ts += `  test("should connect ${prop.notifyHandlerName}", () => {\n`
    ts += `    const callback = jest.fn()\n`
    ts += `    widget.set("${prop.notifyHandlerName}", callback)\n`
    ts += `    const handler = widget.handlers["notify::${prop.rawName}"]\n`
    ts += `    expect(handler).toBeDefined()\n`
    ts += `    handler()\n`
    ts += `    expect(callback).toHaveBeenCalled()\n`
    ts += `    expect(node.on).toHaveBeenCalledWith("notify::${prop.rawName}", expect.any(Function))\n`
    ts += "  })\n"
    ts += "\n"
  }

  ts += "})\n"

  return ts
}
