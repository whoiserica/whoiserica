import { MediaControls } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("MediaControls", () => {
  let widget

  beforeEach(() => {
    widget = new MediaControls({}, MediaControls.createNode({}))
  })

  test("should set mediaStream", () => {
    const newValue = new Gtk.MediaStream()
    widget.set("mediaStream", newValue)
    expect(widget.node.setMediaStream).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyMediaStream", () => {
    const callback = jest.fn()

    widget.set("onNotifyMediaStream", callback)

    const handler = widget.handlers["notify::media-stream"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::media-stream",
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
})
