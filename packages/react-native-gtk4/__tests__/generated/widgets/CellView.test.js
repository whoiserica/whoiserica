import { CellView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("CellView", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.CellView()
    Gtk.CellView.mockImplementation(() => node)
    widget = new CellView({})
  })

  test("should set construct only props", () => {
    const props = {
      cellArea: new Gtk.CellArea(),
      cellAreaContext: new Gtk.CellAreaContext(),
    }

    new CellView(props)

    expect(Gtk.CellView).toHaveBeenCalledWith(props)
  })

  test("should set drawSensitive", () => {
    const newValue = true
    widget.set("drawSensitive", newValue)
    expect(node.setDrawSensitive).toHaveBeenCalledWith(newValue)
  })

  test("should set fitModel", () => {
    const newValue = true
    widget.set("fitModel", newValue)
    expect(node.setFitModel).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.TreeModel()
    widget.set("model", newValue)
    expect(node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(node.setOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should connect onNotifyCellArea", () => {
    const callback = jest.fn()
    widget.set("onNotifyCellArea", callback)
    const handler = widget.handlers["notify::cell-area"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::cell-area",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCellAreaContext", () => {
    const callback = jest.fn()
    widget.set("onNotifyCellAreaContext", callback)
    const handler = widget.handlers["notify::cell-area-context"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::cell-area-context",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDrawSensitive", () => {
    const callback = jest.fn()
    widget.set("onNotifyDrawSensitive", callback)
    const handler = widget.handlers["notify::draw-sensitive"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::draw-sensitive",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFitModel", () => {
    const callback = jest.fn()
    widget.set("onNotifyFitModel", callback)
    const handler = widget.handlers["notify::fit-model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::fit-model",
      expect.any(Function)
    )
  })

  test("should connect onNotifyModel", () => {
    const callback = jest.fn()
    widget.set("onNotifyModel", callback)
    const handler = widget.handlers["notify::model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::model", expect.any(Function))
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn()
    widget.set("onNotifyOrientation", callback)
    const handler = widget.handlers["notify::orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::orientation",
      expect.any(Function)
    )
  })
})
