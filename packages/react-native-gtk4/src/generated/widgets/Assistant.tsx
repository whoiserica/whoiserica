import Gtk from "@girs/node-gtk-4.0"
import Window from "./Window.js"

export default class Assistant<
  T extends Gtk.Assistant = Gtk.Assistant,
> extends Window<T> {
  static createNode(props: Record<string, any> = {}) {
    return new Gtk.Assistant({
      useHeaderBar: props.useHeaderBar,
    })
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onApply":
        this.setHandler("apply", newValue)
        break
      case "onCancel":
        this.setHandler("cancel", newValue)
        break
      case "onClose":
        this.setHandler("close", newValue)
        break
      case "onEscape":
        this.setHandler("escape", newValue)
        break
      case "onPrepare":
        this.setHandler("prepare", newValue)
        break
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue)
        break
      case "onNotifyUseHeaderBar":
        this.setHandler("notify::use-header-bar", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
