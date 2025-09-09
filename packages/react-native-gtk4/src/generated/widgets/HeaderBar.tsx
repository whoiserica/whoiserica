import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class HeaderBar<T extends Gtk.HeaderBar> extends Widget<T> {
  createNode() {
    return new Gtk.HeaderBar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "decorationLayout":
        this.node.setDecorationLayout(newValue)
        break
      case "showTitleButtons":
        this.node.setShowTitleButtons(newValue)
        break
      case "titleWidget":
        this.node.setTitleWidget(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
