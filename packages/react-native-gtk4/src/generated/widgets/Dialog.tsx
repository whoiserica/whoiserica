import Gtk from "@girs/node-gtk-4.0"
import Window from "./Window.js"

export default class Dialog<
  T extends Gtk.Dialog = Gtk.Dialog,
> extends Window<T> {
  createNode() {
    return new Gtk.Dialog({
      useHeaderBar: this.props.useHeaderBar,
    }) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onClose":
        this.setHandler("close", newValue)
        break
      case "onResponse":
        this.setHandler("response", newValue)
        break
      case "onNotifyUseHeaderBar":
        this.setHandler("notify::use-header-bar", newValue)
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
