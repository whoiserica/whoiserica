import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class ColorButton<
  T extends Gtk.ColorButton = Gtk.ColorButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ColorButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "modal":
        if (this.node.getModal() !== newValue) {
          this.node.setModal(newValue)
        }
        break
      case "showEditor":
        if (this.node.showEditor !== newValue) {
          this.node.showEditor = newValue
        }
        break
      case "title":
        if (this.node.getTitle() !== newValue) {
          this.node.setTitle(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "rgba":
        if (this.node.getRgba() !== newValue) {
          this.node.setRgba(newValue)
        }
        break
      case "useAlpha":
        if (this.node.getUseAlpha() !== newValue) {
          this.node.setUseAlpha(newValue)
        }
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onColorSet":
        this.setHandler("color-set", newValue)
        break
      case "onColorActivated":
        this.setHandler("color-activated", newValue)
        break
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue)
        break
      case "onNotifyShowEditor":
        this.setHandler("notify::show-editor", newValue)
        break
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyRgba":
        this.setHandler("notify::rgba", newValue)
        break
      case "onNotifyUseAlpha":
        this.setHandler("notify::use-alpha", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
