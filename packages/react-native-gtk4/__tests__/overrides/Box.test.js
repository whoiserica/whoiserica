import Box from "../../src/generated/widgets/Box.js"
import { createAnyWidget } from "../../test-support/utils.js"
import "../../src/overrides/Box.js"

describe("Box overrides", () => {
  let box

  beforeEach(() => {
    box = new Box()
  })

  test("should append node on appendChild", () => {
    const child = createAnyWidget()
    box.appendChild(child)
    expect(box.node.append).toHaveBeenCalledWith(child.node)
  })

  test("should remove node on removeChild", () => {
    const child = createAnyWidget()

    box.appendChild(child)
    box.removeChild(child)

    expect(box.node.remove).toHaveBeenCalledWith(child.node)
  })

  test("should insert node on insertBefore", () => {
    const child1 = createAnyWidget()
    const child2 = createAnyWidget()
    const beforeChild = createAnyWidget()

    box.appendChild(child1)
    box.appendChild(beforeChild)
    box.insertBefore(child2, beforeChild)

    expect(box.node.insertChildAfter).toHaveBeenCalledWith(
      child1.node,
      child2.node
    )
  })

  test("should prepend in case beforeChild is the first child", () => {
    const child1 = createAnyWidget()
    const child2 = createAnyWidget()

    box.appendChild(child1)
    box.insertBefore(child2, child1)

    expect(box.node.prepend).toHaveBeenCalledWith(child2.node)
  })
})
