import xml2js from "xml2js"
import fs from "fs"
import { GirClass } from "./gir/class.js"

const girFilePath = `${__dirname}/../Gtk-4.0.gir`
const keywordsToReplace = new Set(["constructor", "class"])

export class Gir {
  static async parse() {
    const nameProcessor = (name) => {
      return keywordsToReplace.has(name) ? `${name}_` : name
    }

    const data = await fs.promises.readFile(girFilePath)

    const parser = new xml2js.Parser({
      attrNameProcessors: [nameProcessor],
      tagNameProcessors: [nameProcessor],
    })

    return new Gir(await parser.parseStringPromise(data))
  }

  constructor(xml) {
    this.xml = xml
  }

  get widgetClasses() {
    return this.classes
      .filter(this.isWidgetClass.bind(this))
      .map((c) => new GirClass(c, this))
  }

  get classes() {
    return this.namespace.class_.filter(
      (c) => !["Inscription"].includes(c.$.name)
    )
  }

  get interfaces() {
    return this.namespace.interface
  }

  get enumerations() {
    return [
      ...this.namespace.enumeration,
      {
        $: {
          name: "Pango.EllipsizeMode",
        },
        member: [
          {
            $: {
              name: "NONE",
            },
          },
          {
            $: {
              name: "START",
            },
          },
          {
            $: {
              name: "MIDDLE",
            },
          },
          {
            $: {
              name: "END",
            },
          },
        ],
      },
      {
        $: {
          name: "Pango.WrapMode",
        },
        member: [
          {
            $: {
              name: "WORD",
            },
          },
          {
            $: {
              name: "CHAR",
            },
          },
          {
            $: {
              name: "WORD_CHAR",
            },
          },
        ],
      },
      {
        $: {
          name: "Gdk.GLAPI",
        },
        member: [
          {
            $: {
              name: "GL",
            },
          },
          {
            $: {
              name: "GLES",
            },
          },
        ],
      },
    ]
  }

  get bitfields() {
    return this.namespace.bitfield
  }

  get namespace() {
    return this.xml.repository.namespace[0]
  }

  get imports() {
    const imports = []

    for (const widgetClass of this.widgetClasses) {
      for (const import_ of widgetClass.imports) {
        if (!imports.find((i) => i.name === import_.name)) {
          imports.push(import_)
        }
      }
    }

    return imports
  }

  findInterfaceByName(name) {
    if (!name) {
      return null
    }

    return this.interfaces.find((i) => i.$.name === name)
  }

  findClassByName(name) {
    if (!name) {
      return null
    }

    return this.classes.find((c) => c.$.name === name)
  }

  isWidgetClass(class_) {
    if (!class_) {
      return false
    }

    if (class_.$.name === "Widget") {
      return true
    }

    return this.isWidgetClass(this.findClassByName(class_.$.parent))
  }
}
