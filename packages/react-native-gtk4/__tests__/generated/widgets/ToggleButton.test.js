import { ToggleButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("ToggleButton", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.ToggleButton()
    Gtk.ToggleButton.mockImplementation(() => node)
    widget = new ToggleButton({})
  })

  test("should set active", () => {
    const newValue = true
    widget.set("active", newValue)
    expect(node.setActive).toHaveBeenCalledWith(newValue)
  })

  test("should set group", () => {
    const newValue = new Gtk.ToggleButton()
    widget.set("group", newValue)
    expect(node.setGroup).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set actionName", () => {
    const newValue = "Some String"
    widget.set("actionName", newValue)
    expect(node.setActionName).toHaveBeenCalledWith(newValue)
  })

  test("should set actionTarget", () => {
    const newValue = new GLib.Variant()
    widget.set("actionTarget", newValue)
    expect(node.actionTarget).toBe(newValue)
  })

  test("should connect onToggled", () => {
    const callback = jest.fn()
    widget.set("onToggled", callback)
    const handler = widget.handlers["toggled"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("toggled", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActive", () => {
    const callback = jest.fn()
    widget.set("onNotifyActive", callback)
    const handler = widget.handlers["notify::active"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::active", expect.any(Function))
  })

  test("should connect onNotifyGroup", () => {
    const callback = jest.fn()
    widget.set("onNotifyGroup", callback)
    const handler = widget.handlers["notify::group"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::group", expect.any(Function))
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

  test("should connect onNotifyActionName", () => {
    const callback = jest.fn()
    widget.set("onNotifyActionName", callback)
    const handler = widget.handlers["notify::action-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::action-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyActionTarget", () => {
    const callback = jest.fn()
    widget.set("onNotifyActionTarget", callback)
    const handler = widget.handlers["notify::action-target"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::action-target",
      expect.any(Function)
    )
  })
})
