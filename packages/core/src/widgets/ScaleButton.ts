import { Container, Gtk } from ".."
import Widget from "../widget"

export default class ScaleButton extends Widget {
  createNode(container: Container) {
    return new Gtk.ScaleButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "active":
        this.node.setActive(newValue)
        break
      case "adjustment":
        this.node.setAdjustment(newValue)
        break
      case "icons":
        this.node.setIcons(newValue)
        break
      case "value":
        this.node.setValue(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onPopdown":
        if (oldValue) {
          this.node.off("popdown", oldValue)
        }
        if (newValue) {
          this.node.on("popdown", newValue)
        }
        break
      case "onPopup":
        if (oldValue) {
          this.node.off("popup", oldValue)
        }
        if (newValue) {
          this.node.on("popup", newValue)
        }
        break
      case "onValueChanged":
        if (oldValue) {
          this.node.off("value-changed", oldValue)
        }
        if (newValue) {
          this.node.on("value-changed", newValue)
        }
        break
      default:
        break
    }
  }
}
