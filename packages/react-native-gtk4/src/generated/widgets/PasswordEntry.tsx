import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class PasswordEntry<
  T extends Gtk.PasswordEntry = Gtk.PasswordEntry,
> extends Widget<T> {
  createNode() {
    return new Gtk.PasswordEntry({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "activatesDefault":
        if (this.node.activatesDefault !== newValue) {
          this.node.activatesDefault = newValue
        }
        break
      case "extraMenu":
        if (this.node.getExtraMenu !== newValue) {
          this.node.setExtraMenu(newValue)
        }
        break
      case "placeholderText":
        if (this.node.placeholderText !== newValue) {
          this.node.placeholderText = newValue
        }
        break
      case "showPeekIcon":
        if (this.node.getShowPeekIcon !== newValue) {
          this.node.setShowPeekIcon(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "editable":
        if (this.node.getEditable !== newValue) {
          this.node.setEditable(newValue)
        }
        break
      case "enableUndo":
        if (this.node.getEnableUndo !== newValue) {
          this.node.setEnableUndo(newValue)
        }
        break
      case "maxWidthChars":
        if (this.node.getMaxWidthChars !== newValue) {
          this.node.setMaxWidthChars(newValue)
        }
        break
      case "text":
        if (this.node.getText !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "widthChars":
        if (this.node.getWidthChars !== newValue) {
          this.node.setWidthChars(newValue)
        }
        break
      case "xalign":
        if (this.node.xalign !== newValue) {
          this.node.xalign = newValue
        }
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onChanged":
        this.setHandler("changed", newValue)
        break
      case "onDeleteText":
        this.setHandler("delete-text", newValue)
        break
      case "onInsertText":
        this.setHandler("insert-text", newValue)
        break
      case "onNotifyActivatesDefault":
        this.setHandler("notify::activates-default", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extra-menu", newValue)
        break
      case "onNotifyPlaceholderText":
        this.setHandler("notify::placeholder-text", newValue)
        break
      case "onNotifyShowPeekIcon":
        this.setHandler("notify::show-peek-icon", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyCursorPosition":
        this.setHandler("notify::cursor-position", newValue)
        break
      case "onNotifyEditable":
        this.setHandler("notify::editable", newValue)
        break
      case "onNotifyEnableUndo":
        this.setHandler("notify::enable-undo", newValue)
        break
      case "onNotifyMaxWidthChars":
        this.setHandler("notify::max-width-chars", newValue)
        break
      case "onNotifySelectionBound":
        this.setHandler("notify::selection-bound", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
        break
      case "onNotifyWidthChars":
        this.setHandler("notify::width-chars", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
    }
  }
}
