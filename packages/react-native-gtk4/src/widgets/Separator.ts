import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Separator<T extends Gtk.Separator> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Separator() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
