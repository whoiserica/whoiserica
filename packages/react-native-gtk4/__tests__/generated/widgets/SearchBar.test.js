import { SearchBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("SearchBar", () => {
  let widget

  beforeEach(() => {
    widget = new SearchBar({})
  })

  test("should set keyCaptureWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("keyCaptureWidget", newValue)
    expect(widget.node.setKeyCaptureWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set searchModeEnabled", () => {
    const newValue = true
    widget.set("searchModeEnabled", newValue)
    expect(widget.node.searchModeEnabled).toBe(newValue)
  })

  test("should set showCloseButton", () => {
    const newValue = true
    widget.set("showCloseButton", newValue)
    expect(widget.node.setShowCloseButton).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyChild", callback)

    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyKeyCaptureWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyKeyCaptureWidget", callback)

    const handler = widget.handlers["notify::key-capture-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::key-capture-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifySearchModeEnabled", () => {
    const callback = jest.fn()

    widget.set("onNotifySearchModeEnabled", callback)

    const handler = widget.handlers["notify::search-mode-enabled"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::search-mode-enabled",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowCloseButton", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowCloseButton", callback)

    const handler = widget.handlers["notify::show-close-button"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-close-button",
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

  test("should append child", () => {
    const child = new SearchBar()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new SearchBar()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new SearchBar()
    const sibling = new SearchBar()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
