import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Inscription<
  T extends Gtk.Inscription = Gtk.Inscription,
> extends Widget<T> {
  createNode() {
    return new Gtk.Inscription({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "attributes":
        this.node.setAttributes(newValue)
        break
      case "markup":
        this.node.setMarkup(newValue)
        break
      case "minChars":
        this.node.setMinChars(newValue)
        break
      case "minLines":
        this.node.setMinLines(newValue)
        break
      case "natChars":
        this.node.setNatChars(newValue)
        break
      case "natLines":
        this.node.setNatLines(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "textOverflow":
        this.node.setTextOverflow(newValue)
        break
      case "wrapMode":
        this.node.setWrapMode(newValue)
        break
      case "xalign":
        this.node.setXalign(newValue)
        break
      case "yalign":
        this.node.setYalign(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue)
        break
      case "onNotifyMarkup":
        this.setHandler("notify::markup", newValue)
        break
      case "onNotifyMinChars":
        this.setHandler("notify::min-chars", newValue)
        break
      case "onNotifyMinLines":
        this.setHandler("notify::min-lines", newValue)
        break
      case "onNotifyNatChars":
        this.setHandler("notify::nat-chars", newValue)
        break
      case "onNotifyNatLines":
        this.setHandler("notify::nat-lines", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
        break
      case "onNotifyTextOverflow":
        this.setHandler("notify::text-overflow", newValue)
        break
      case "onNotifyWrapMode":
        this.setHandler("notify::wrap-mode", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      case "onNotifyYalign":
        this.setHandler("notify::yalign", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
