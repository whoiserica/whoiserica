import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AnyWidget from "../../widget.js"

export default class Overlay<
  T extends Gtk.Overlay = Gtk.Overlay,
> extends Widget<T> {
  createNode() {
    return new Gtk.Overlay({}) as T
  }
  appendChild(child: AnyWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AnyWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AnyWidget, beforeChild: AnyWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onGetChildPosition":
        this.setHandler("get-child-position", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      default:
        break
    }
  }
}
