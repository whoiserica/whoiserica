import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class LevelBar<
  T extends Gtk.LevelBar = Gtk.LevelBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.LevelBar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "inverted":
        if (this.node.inverted !== newValue) {
          this.node.setInverted(newValue)
        }
        break
      case "maxValue":
        if (this.node.maxValue !== newValue) {
          this.node.setMaxValue(newValue)
        }
        break
      case "minValue":
        if (this.node.minValue !== newValue) {
          this.node.setMinValue(newValue)
        }
        break
      case "mode":
        if (this.node.mode !== newValue) {
          this.node.setMode(newValue)
        }
        break
      case "value":
        if (this.node.value !== newValue) {
          this.node.setValue(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.orientation !== newValue) {
          this.node.setOrientation(newValue)
        }
        break
      case "onOffsetChanged":
        this.setHandler("offset-changed", newValue)
        break
      case "onNotifyInverted":
        this.setHandler("notify::inverted", newValue)
        break
      case "onNotifyMaxValue":
        this.setHandler("notify::max-value", newValue)
        break
      case "onNotifyMinValue":
        this.setHandler("notify::min-value", newValue)
        break
      case "onNotifyMode":
        this.setHandler("notify::mode", newValue)
        break
      case "onNotifyValue":
        this.setHandler("notify::value", newValue)
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
