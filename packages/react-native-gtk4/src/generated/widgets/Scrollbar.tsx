import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Scrollbar<
  T extends Gtk.Scrollbar = Gtk.Scrollbar,
> extends Widget<T> {
  createNode() {
    return new Gtk.Scrollbar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        if (this.node.adjustment !== newValue) {
          this.node.setAdjustment(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.orientation !== newValue) {
          this.node.setOrientation(newValue)
        }
        break
      case "onNotifyAdjustment":
        this.setHandler("notify::adjustment", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
    }
  }
}
