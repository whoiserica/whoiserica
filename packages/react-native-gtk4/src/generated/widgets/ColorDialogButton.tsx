import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ColorDialogButton<
  T extends Gtk.ColorDialogButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.ColorDialogButton(this.props.dialog) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "dialog":
        this.node.setDialog(newValue)
        break
      case "rgba":
        this.node.setRgba(newValue)
        break
    }
  }
}
