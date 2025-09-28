import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class DropDown<T extends Gtk.DropDown> extends Widget<T> {
  createNode() {
    return new Gtk.DropDown({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "enableSearch":
        this.node.setEnableSearch(newValue)
        break
      case "expression":
        this.node.setExpression(newValue)
        break
      case "factory":
        this.node.setFactory(newValue)
        break
      case "listFactory":
        this.node.setListFactory(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "selected":
        this.node.setSelected(newValue)
        break
      case "showArrow":
        this.node.setShowArrow(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
    }
  }
}
