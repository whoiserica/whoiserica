import { FontChooserWidget } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Pango from "@girs/node-pango-1.0"

describe("FontChooserWidget", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.FontChooserWidget()
    Gtk.FontChooserWidget.mockImplementation(() => node)
    widget = new FontChooserWidget({})
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set font", () => {
    const newValue = "Some String"
    widget.set("font", newValue)
    expect(node.setFont).toHaveBeenCalledWith(newValue)
  })

  test("should set fontDesc", () => {
    const newValue = new Pango.FontDescription()
    widget.set("fontDesc", newValue)
    expect(node.setFontDesc).toHaveBeenCalledWith(newValue)
  })

  test("should set language", () => {
    const newValue = "Some String"
    widget.set("language", newValue)
    expect(node.setLanguage).toHaveBeenCalledWith(newValue)
  })

  test("should set level", () => {
    const newValue = Gtk.FontChooserLevel.FAMILY
    widget.set("level", newValue)
    expect(node.setLevel).toHaveBeenCalledWith(newValue)
  })

  test("should set previewText", () => {
    const newValue = "Some String"
    widget.set("previewText", newValue)
    expect(node.setPreviewText).toHaveBeenCalledWith(newValue)
  })

  test("should set showPreviewEntry", () => {
    const newValue = true
    widget.set("showPreviewEntry", newValue)
    expect(node.setShowPreviewEntry).toHaveBeenCalledWith(newValue)
  })

  test("should connect onFontActivated", () => {
    const callback = jest.fn()
    widget.set("onFontActivated", callback)
    const handler = widget.handlers["font-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("font-activated", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyTweakAction", () => {
    const callback = jest.fn()
    widget.set("onNotifyTweakAction", callback)
    const handler = widget.handlers["notify::tweak-action"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::tweak-action",
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

  test("should connect onNotifyFont", () => {
    const callback = jest.fn()
    widget.set("onNotifyFont", callback)
    const handler = widget.handlers["notify::font"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::font", expect.any(Function))
  })

  test("should connect onNotifyFontDesc", () => {
    const callback = jest.fn()
    widget.set("onNotifyFontDesc", callback)
    const handler = widget.handlers["notify::font-desc"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::font-desc",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFontFeatures", () => {
    const callback = jest.fn()
    widget.set("onNotifyFontFeatures", callback)
    const handler = widget.handlers["notify::font-features"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::font-features",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLanguage", () => {
    const callback = jest.fn()
    widget.set("onNotifyLanguage", callback)
    const handler = widget.handlers["notify::language"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::language",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLevel", () => {
    const callback = jest.fn()
    widget.set("onNotifyLevel", callback)
    const handler = widget.handlers["notify::level"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::level", expect.any(Function))
  })

  test("should connect onNotifyPreviewText", () => {
    const callback = jest.fn()
    widget.set("onNotifyPreviewText", callback)
    const handler = widget.handlers["notify::preview-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::preview-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowPreviewEntry", () => {
    const callback = jest.fn()
    widget.set("onNotifyShowPreviewEntry", callback)
    const handler = widget.handlers["notify::show-preview-entry"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::show-preview-entry",
      expect.any(Function)
    )
  })
})
