import { Gtk } from "../../index.js"
import Box from "./Box.js"

export default class ShortcutsSection<
  T extends Gtk.ShortcutsSection,
> extends Box<T> {
  createNode() {
    return new Gtk.ShortcutsSection({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "maxHeight":
        this.node.maxHeight = newValue
        break
      case "sectionName":
        this.node.sectionName = newValue
        break
      case "title":
        this.node.title = newValue
        break
      case "viewName":
        this.node.viewName = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onChangeCurrentPage":
        this.setHandler("change-current-page", newValue)
        break
      case "onNotifyMaxHeight":
        this.setHandler("notify::max-height", newValue)
        break
      case "onNotifySectionName":
        this.setHandler("notify::section-name", newValue)
        break
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue)
        break
      case "onNotifyViewName":
        this.setHandler("notify::view-name", newValue)
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
