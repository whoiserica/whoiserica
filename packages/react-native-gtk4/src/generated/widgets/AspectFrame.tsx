import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class AspectFrame<
  T extends Gtk.AspectFrame = Gtk.AspectFrame,
> extends Widget<T> {
  createNode() {
    return new Gtk.AspectFrame({}) as T
  }
  appendChild(child: Widget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget, beforeChild: Widget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "obeyChild":
        if (this.node.obeyChild !== newValue) {
          this.node.setObeyChild(newValue)
        }
        break
      case "ratio":
        if (this.node.ratio !== newValue) {
          this.node.setRatio(newValue)
        }
        break
      case "xalign":
        if (this.node.xalign !== newValue) {
          this.node.setXalign(newValue)
        }
        break
      case "yalign":
        if (this.node.yalign !== newValue) {
          this.node.setYalign(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyObeyChild":
        this.setHandler("notify::obey-child", newValue)
        break
      case "onNotifyRatio":
        this.setHandler("notify::ratio", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      case "onNotifyYalign":
        this.setHandler("notify::yalign", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
