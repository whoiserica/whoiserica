import { Container, Gtk } from "../../index.js"
import ListBase from "./ListBase.js"

export default class GridView<T extends Gtk.GridView> extends ListBase<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.GridView(props.model, props.factory) as T
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
      case "maxColumns":
        this.node.setMaxColumns(newValue)
        break
      case "minColumns":
        this.node.setMinColumns(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "singleClickActivate":
        this.node.setSingleClickActivate(newValue)
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
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
    }
  }
}
