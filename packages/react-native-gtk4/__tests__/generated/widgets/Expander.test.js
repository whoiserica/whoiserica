import { Expander } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Expander", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Expander()
    Gtk.Expander.mockImplementation(() => node)
    widget = new Expander({})
  })

  test("should set expanded", () => {
    const newValue = true
    widget.set("expanded", newValue)
    expect(node.setExpanded).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "Some String"
    widget.set("label", newValue)
    expect(node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set labelWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("labelWidget", newValue)
    expect(node.setLabelWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set resizeToplevel", () => {
    const newValue = true
    widget.set("resizeToplevel", newValue)
    expect(node.setResizeToplevel).toHaveBeenCalledWith(newValue)
  })

  test("should set useMarkup", () => {
    const newValue = true
    widget.set("useMarkup", newValue)
    expect(node.setUseMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(node.setUseUnderline).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onActivate", () => {
    const callback = jest.fn()
    widget.set("onActivate", callback)
    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("activate", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()
    widget.set("onNotifyChild", callback)
    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::child", expect.any(Function))
  })

  test("should connect onNotifyExpanded", () => {
    const callback = jest.fn()
    widget.set("onNotifyExpanded", callback)
    const handler = widget.handlers["notify::expanded"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::expanded",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLabel", () => {
    const callback = jest.fn()
    widget.set("onNotifyLabel", callback)
    const handler = widget.handlers["notify::label"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::label", expect.any(Function))
  })

  test("should connect onNotifyLabelWidget", () => {
    const callback = jest.fn()
    widget.set("onNotifyLabelWidget", callback)
    const handler = widget.handlers["notify::label-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::label-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyResizeToplevel", () => {
    const callback = jest.fn()
    widget.set("onNotifyResizeToplevel", callback)
    const handler = widget.handlers["notify::resize-toplevel"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::resize-toplevel",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseMarkup", () => {
    const callback = jest.fn()
    widget.set("onNotifyUseMarkup", callback)
    const handler = widget.handlers["notify::use-markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::use-markup",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseUnderline", () => {
    const callback = jest.fn()
    widget.set("onNotifyUseUnderline", callback)
    const handler = widget.handlers["notify::use-underline"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::use-underline",
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
