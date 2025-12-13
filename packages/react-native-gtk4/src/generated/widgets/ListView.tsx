import { Gtk } from "../../index.js"
import ListBase from "./ListBase.js"

export default class ListView<T extends Gtk.ListView> extends ListBase<T> {
  createNode() {
    return new Gtk.ListView({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "enableRubberband":
        this.node.setEnableRubberband(newValue)
        break
      case "factory":
        this.node.setFactory(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "showSeparators":
        this.node.setShowSeparators(newValue)
        break
      case "singleClickActivate":
        this.node.setSingleClickActivate(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue)
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyEnableRubberband":
        this.setHandler("notify::enable-rubberband", newValue)
        break
      case "onNotifyFactory":
        this.setHandler("notify::factory", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifyShowSeparators":
        this.setHandler("notify::show-separators", newValue)
        break
      case "onNotifySingleClickActivate":
        this.setHandler("notify::single-click-activate", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
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
