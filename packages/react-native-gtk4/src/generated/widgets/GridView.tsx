import { Gtk } from "../../index.js"
import ListBase from "./ListBase.js"

export default class GridView<
  T extends Gtk.GridView = Gtk.GridView,
> extends ListBase<T> {
  createNode() {
    return new Gtk.GridView({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "enableRubberband":
        if (this.node.enableRubberband !== newValue) {
          this.node.setEnableRubberband(newValue)
        }
        break
      case "factory":
        if (this.node.factory !== newValue) {
          this.node.setFactory(newValue)
        }
        break
      case "maxColumns":
        if (this.node.maxColumns !== newValue) {
          this.node.setMaxColumns(newValue)
        }
        break
      case "minColumns":
        if (this.node.minColumns !== newValue) {
          this.node.setMinColumns(newValue)
        }
        break
      case "model":
        if (this.node.model !== newValue) {
          this.node.setModel(newValue)
        }
        break
      case "singleClickActivate":
        if (this.node.singleClickActivate !== newValue) {
          this.node.setSingleClickActivate(newValue)
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
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyEnableRubberband":
        this.setHandler("notify::enable-rubberband", newValue)
        break
      case "onNotifyFactory":
        this.setHandler("notify::factory", newValue)
        break
      case "onNotifyMaxColumns":
        this.setHandler("notify::max-columns", newValue)
        break
      case "onNotifyMinColumns":
        this.setHandler("notify::min-columns", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
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
