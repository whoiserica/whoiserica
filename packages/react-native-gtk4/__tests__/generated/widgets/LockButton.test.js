import { LockButton } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("LockButton", () => {
  let widget

  beforeEach(() => {
    widget = new LockButton({}, LockButton.createNode({}))
  })

  test("should set permission", () => {
    const newValue = new Gio.Permission()
    widget.set("permission", newValue)
    expect(widget.node.setPermission).toHaveBeenCalledWith(newValue)
  })

  test("should set textLock", () => {
    const newValue = "Some String"
    widget.set("textLock", newValue)
    expect(widget.node.textLock).toBe(newValue)
  })

  test("should set textUnlock", () => {
    const newValue = "Some String"
    widget.set("textUnlock", newValue)
    expect(widget.node.textUnlock).toBe(newValue)
  })

  test("should set tooltipLock", () => {
    const newValue = "Some String"
    widget.set("tooltipLock", newValue)
    expect(widget.node.tooltipLock).toBe(newValue)
  })

  test("should set tooltipNotAuthorized", () => {
    const newValue = "Some String"
    widget.set("tooltipNotAuthorized", newValue)
    expect(widget.node.tooltipNotAuthorized).toBe(newValue)
  })

  test("should set tooltipUnlock", () => {
    const newValue = "Some String"
    widget.set("tooltipUnlock", newValue)
    expect(widget.node.tooltipUnlock).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set actionName", () => {
    const newValue = "Some String"
    widget.set("actionName", newValue)
    expect(widget.node.setActionName).toHaveBeenCalledWith(newValue)
  })

  test("should set actionTarget", () => {
    const newValue = new GLib.Variant()
    widget.set("actionTarget", newValue)
    expect(widget.node.setActionTargetValue).toHaveBeenCalledWith(newValue)
  })

  test("should connect onNotifyPermission", () => {
    const callback = jest.fn()

    widget.set("onNotifyPermission", callback)

    const handler = widget.handlers["notify::permission"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::permission",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTextLock", () => {
    const callback = jest.fn()

    widget.set("onNotifyTextLock", callback)

    const handler = widget.handlers["notify::text-lock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text-lock",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTextUnlock", () => {
    const callback = jest.fn()

    widget.set("onNotifyTextUnlock", callback)

    const handler = widget.handlers["notify::text-unlock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text-unlock",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipLock", () => {
    const callback = jest.fn()

    widget.set("onNotifyTooltipLock", callback)

    const handler = widget.handlers["notify::tooltip-lock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltip-lock",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipNotAuthorized", () => {
    const callback = jest.fn()

    widget.set("onNotifyTooltipNotAuthorized", callback)

    const handler = widget.handlers["notify::tooltip-not-authorized"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltip-not-authorized",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipUnlock", () => {
    const callback = jest.fn()

    widget.set("onNotifyTooltipUnlock", callback)

    const handler = widget.handlers["notify::tooltip-unlock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltip-unlock",
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
    expect(widget.node.on).toHaveBeenCalledWith(
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
    expect(widget.node.on).toHaveBeenCalledWith(
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::action-target",
      expect.any(Function)
    )
  })
})
