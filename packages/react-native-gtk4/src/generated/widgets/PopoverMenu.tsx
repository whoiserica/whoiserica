import { Gtk } from "../../index.js"
import Popover from "./Popover.js"

export default class PopoverMenu<
  T extends Gtk.PopoverMenu = Gtk.PopoverMenu,
> extends Popover<T> {
  createNode() {
    return new Gtk.PopoverMenu({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "menuModel":
        if (this.node.getMenuModel !== newValue) {
          this.node.setMenuModel(newValue)
        }
        break
      case "visibleSubmenu":
        if (this.node.visibleSubmenu !== newValue) {
          this.node.visibleSubmenu = newValue
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyMenuModel":
        this.setHandler("notify::menu-model", newValue)
        break
      case "onNotifyVisibleSubmenu":
        this.setHandler("notify::visible-submenu", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
