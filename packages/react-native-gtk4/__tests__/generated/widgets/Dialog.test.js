import { Dialog } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Dialog", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Dialog()
    Gtk.Dialog.mockImplementation(() => node)
    widget = new Dialog({})
  })

  test("should set construct only props", () => {
    const props = {
      useHeaderBar: 1,
    }

    new Dialog(props)

    expect(Gtk.Dialog).toHaveBeenCalledWith(props)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onClose", () => {
    const callback = jest.fn()
    widget.set("onClose", callback)
    const handler = widget.handlers["close"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("close", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onResponse", () => {
    const callback = jest.fn()
    widget.set("onResponse", callback)
    const handler = widget.handlers["response"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("response", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyUseHeaderBar", () => {
    const callback = jest.fn()
    widget.set("onNotifyUseHeaderBar", callback)
    const handler = widget.handlers["notify::use-header-bar"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::use-header-bar",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn()
    widget.set("onNotifyAccessibleRole", callback)
    const handler = widget.handlers["notify::accessible-role"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
