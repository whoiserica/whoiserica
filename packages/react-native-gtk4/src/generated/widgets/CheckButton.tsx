import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class CheckButton<T extends Gtk.CheckButton> extends Widget<T> {
  createNode() {
    return new Gtk.CheckButton({}) as T
  }
  appendChild(child: Widget<any>) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "active":
        this.node.setActive(newValue)
        break
      case "group":
        this.node.setGroup(newValue)
        break
      case "inconsistent":
        this.node.setInconsistent(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
        break
      case "onNotifyActive":
        this.setHandler("notify::active", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyGroup":
        this.setHandler("notify::group", newValue)
        break
      case "onNotifyInconsistent":
        this.setHandler("notify::inconsistent", newValue)
        break
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyUseUnderline":
        this.setHandler("notify::use-underline", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyActionName":
        this.setHandler("notify::action-name", newValue)
        break
      case "onNotifyActionTarget":
        this.setHandler("notify::action-target", newValue)
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onToggled":
        this.setHandler("toggled", newValue)
        break
    }
  }
}
