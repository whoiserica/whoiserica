import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class GLArea<
  T extends Gtk.GLArea = Gtk.GLArea,
> extends Widget<T> {
  static createNode() {
    return new Gtk.GLArea({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "allowedApis":
        this.node.setAllowedApis(newValue)
        break
      case "autoRender":
        this.node.setAutoRender(newValue)
        break
      case "hasDepthBuffer":
        this.node.setHasDepthBuffer(newValue)
        break
      case "hasStencilBuffer":
        this.node.setHasStencilBuffer(newValue)
        break
      case "useEs":
        this.node.setUseEs(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onCreateContext":
        this.setHandler("create-context", newValue)
        break
      case "onRender":
        this.setHandler("render", newValue)
        break
      case "onResize":
        this.setHandler("resize", newValue)
        break
      case "onNotifyAllowedApis":
        this.setHandler("notify::allowed-apis", newValue)
        break
      case "onNotifyApi":
        this.setHandler("notify::api", newValue)
        break
      case "onNotifyAutoRender":
        this.setHandler("notify::auto-render", newValue)
        break
      case "onNotifyContext":
        this.setHandler("notify::context", newValue)
        break
      case "onNotifyHasDepthBuffer":
        this.setHandler("notify::has-depth-buffer", newValue)
        break
      case "onNotifyHasStencilBuffer":
        this.setHandler("notify::has-stencil-buffer", newValue)
        break
      case "onNotifyUseEs":
        this.setHandler("notify::use-es", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
