import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ListBase<
  T extends Gtk.ListBase = Gtk.ListBase,
> extends Widget<T> {
  createNode() {
    return new Gtk.ListBase({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "orientation":
        if (this.node.orientation !== newValue) {
          this.node.orientation = newValue
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "hadjustment":
        if (this.node.hadjustment !== newValue) {
          this.node.setHadjustment(newValue)
        }
        break
      case "hscrollPolicy":
        if (this.node.hscrollPolicy !== newValue) {
          this.node.setHscrollPolicy(newValue)
        }
        break
      case "vadjustment":
        if (this.node.vadjustment !== newValue) {
          this.node.setVadjustment(newValue)
        }
        break
      case "vscrollPolicy":
        if (this.node.vscrollPolicy !== newValue) {
          this.node.setVscrollPolicy(newValue)
        }
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscroll-policy", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscroll-policy", newValue)
        break
    }
  }
}
