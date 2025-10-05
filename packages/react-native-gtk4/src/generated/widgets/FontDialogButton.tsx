import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class FontDialogButton<
  T extends Gtk.FontDialogButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.FontDialogButton({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "dialog":
        this.node.setDialog(newValue)
        break
      case "fontDesc":
        this.node.setFontDesc(newValue)
        break
      case "fontFeatures":
        this.node.setFontFeatures(newValue)
        break
      case "language":
        this.node.setLanguage(newValue)
        break
      case "level":
        this.node.setLevel(newValue)
        break
      case "useFont":
        this.node.setUseFont(newValue)
        break
      case "useSize":
        this.node.setUseSize(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyDialog":
        this.setHandler("notify::dialog", newValue)
        break
      case "onNotifyFontDesc":
        this.setHandler("notify::font-desc", newValue)
        break
      case "onNotifyFontFeatures":
        this.setHandler("notify::font-features", newValue)
        break
      case "onNotifyLanguage":
        this.setHandler("notify::language", newValue)
        break
      case "onNotifyLevel":
        this.setHandler("notify::level", newValue)
        break
      case "onNotifyUseFont":
        this.setHandler("notify::use-font", newValue)
        break
      case "onNotifyUseSize":
        this.setHandler("notify::use-size", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
