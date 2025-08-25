import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class MediaControls<
  T extends Gtk.MediaControls,
> extends Widget<T> {
  createNode() {
    return new Gtk.MediaControls(this.props.stream) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "mediaStream":
        this.node.setMediaStream(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
