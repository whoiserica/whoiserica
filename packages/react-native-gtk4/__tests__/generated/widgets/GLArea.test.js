import { GLArea } from "../../../src/generated/widgets.js"
import Gdk from "@girs/node-gdk-4.0"
import Gtk from "@girs/node-gtk-4.0"

describe("GLArea", () => {
  let widget

  beforeEach(() => {
    widget = new GLArea({}, GLArea.createNode({}))
  })

  test("should set allowedApis", () => {
    const newValue = Gdk.GLAPI.GL
    widget.set("allowedApis", newValue)
    expect(widget.node.setAllowedApis).toHaveBeenCalledWith(newValue)
  })

  test("should set autoRender", () => {
    const newValue = true
    widget.set("autoRender", newValue)
    expect(widget.node.setAutoRender).toHaveBeenCalledWith(newValue)
  })

  test("should set hasDepthBuffer", () => {
    const newValue = true
    widget.set("hasDepthBuffer", newValue)
    expect(widget.node.setHasDepthBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set hasStencilBuffer", () => {
    const newValue = true
    widget.set("hasStencilBuffer", newValue)
    expect(widget.node.setHasStencilBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set useEs", () => {
    const newValue = true
    widget.set("useEs", newValue)
    expect(widget.node.setUseEs).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onCreateContext", () => {
    const callback = jest.fn()

    widget.set("onCreateContext", callback)

    const handler = widget.handlers["create-context"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "create-context",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRender", () => {
    const callback = jest.fn()

    widget.set("onRender", callback)

    const handler = widget.handlers["render"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("render", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onResize", () => {
    const callback = jest.fn()

    widget.set("onResize", callback)

    const handler = widget.handlers["resize"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("resize", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyAllowedApis", () => {
    const callback = jest.fn()

    widget.set("onNotifyAllowedApis", callback)

    const handler = widget.handlers["notify::allowed-apis"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::allowed-apis",
      expect.any(Function)
    )
  })

  test("should connect onNotifyApi", () => {
    const callback = jest.fn()

    widget.set("onNotifyApi", callback)

    const handler = widget.handlers["notify::api"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::api",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAutoRender", () => {
    const callback = jest.fn()

    widget.set("onNotifyAutoRender", callback)

    const handler = widget.handlers["notify::auto-render"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::auto-render",
      expect.any(Function)
    )
  })

  test("should connect onNotifyContext", () => {
    const callback = jest.fn()

    widget.set("onNotifyContext", callback)

    const handler = widget.handlers["notify::context"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::context",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasDepthBuffer", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasDepthBuffer", callback)

    const handler = widget.handlers["notify::has-depth-buffer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::has-depth-buffer",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasStencilBuffer", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasStencilBuffer", callback)

    const handler = widget.handlers["notify::has-stencil-buffer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::has-stencil-buffer",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseEs", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseEs", callback)

    const handler = widget.handlers["notify::use-es"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-es",
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
