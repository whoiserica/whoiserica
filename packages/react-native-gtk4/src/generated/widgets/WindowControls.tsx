import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class WindowControls<
  T extends Gtk.WindowControls = Gtk.WindowControls,
> extends Widget<T> {
  static createNode() {
    return new Gtk.WindowControls({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "decorationLayout":
        if (this.node.getDecorationLayout() !== newValue) {
          this.node.setDecorationLayout(newValue)
        }
        break
      case "side":
        if (this.node.getSide() !== newValue) {
          this.node.setSide(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyDecorationLayout":
        this.setHandler("notify::decoration-layout", newValue)
        break
      case "onNotifyEmpty":
        this.setHandler("notify::empty", newValue)
        break
      case "onNotifySide":
        this.setHandler("notify::side", newValue)
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
