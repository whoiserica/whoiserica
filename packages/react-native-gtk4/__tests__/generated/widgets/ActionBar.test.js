import { ActionBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ActionBar", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.ActionBar()
    Gtk.ActionBar.mockImplementation(() => node)
    widget = new ActionBar({})
  })

  test("should set revealed", () => {
    const newValue = true
    widget.set("revealed", newValue)
    expect(node.setRevealed).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyRevealed", () => {
    const callback = jest.fn()
    widget.set("onNotifyRevealed", callback)
    const handler = widget.handlers["notify::revealed"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::revealed",
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
