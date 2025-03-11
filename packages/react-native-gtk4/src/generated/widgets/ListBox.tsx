import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ListBox<T extends Gtk.ListBox> extends Widget<T> {
  children: Widget<any>[] = []
  createNode(props: Record<string, any>) {
    return new Gtk.ListBox() as T
  }
  appendChild(child: Widget<any>) {
    this.node.append(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.remove(child.node)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    const beforeIndex = this.children.indexOf(beforeChild)
    const afterIndex = beforeIndex - 1
    this.node.insert(child.node, afterIndex)
    this.children.splice(afterIndex, 0, child)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activateOnSingleClick":
        this.node.setActivateOnSingleClick(newValue)
        break
      case "selectionMode":
        this.node.setSelectionMode(newValue)
        break
      case "showSeparators":
        this.node.setShowSeparators(newValue)
        break
      case "onActivateCursorRow":
        if (oldValue) {
          this.node.off("activate-cursor-row", oldValue)
        }
        if (newValue) {
          this.node.on("activate-cursor-row", newValue)
        }
        break
      case "onMoveCursor":
        if (oldValue) {
          this.node.off("move-cursor", oldValue)
        }
        if (newValue) {
          this.node.on("move-cursor", newValue)
        }
        break
      case "onRowActivated":
        if (oldValue) {
          this.node.off("row-activated", oldValue)
        }
        if (newValue) {
          this.node.on("row-activated", newValue)
        }
        break
      case "onRowSelected":
        if (oldValue) {
          this.node.off("row-selected", oldValue)
        }
        if (newValue) {
          this.node.on("row-selected", newValue)
        }
        break
      case "onSelectAll":
        if (oldValue) {
          this.node.off("select-all", oldValue)
        }
        if (newValue) {
          this.node.on("select-all", newValue)
        }
        break
      case "onSelectedRowsChanged":
        if (oldValue) {
          this.node.off("selected-rows-changed", oldValue)
        }
        if (newValue) {
          this.node.on("selected-rows-changed", newValue)
        }
        break
      case "onToggleCursorRow":
        if (oldValue) {
          this.node.off("toggle-cursor-row", oldValue)
        }
        if (newValue) {
          this.node.on("toggle-cursor-row", newValue)
        }
        break
      case "onUnselectAll":
        if (oldValue) {
          this.node.off("unselect-all", oldValue)
        }
        if (newValue) {
          this.node.on("unselect-all", newValue)
        }
        break
    }
  }
}
