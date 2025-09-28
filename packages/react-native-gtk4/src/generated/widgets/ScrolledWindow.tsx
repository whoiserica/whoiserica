import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ScrolledWindow<
  T extends Gtk.ScrolledWindow,
> extends Widget<T> {
  createNode() {
    return new Gtk.ScrolledWindow({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "hscrollbarPolicy":
        this.node.hscrollbarPolicy = newValue
        break
      case "kineticScrolling":
        this.node.setKineticScrolling(newValue)
        break
      case "maxContentHeight":
        this.node.setMaxContentHeight(newValue)
        break
      case "maxContentWidth":
        this.node.setMaxContentWidth(newValue)
        break
      case "minContentHeight":
        this.node.setMinContentHeight(newValue)
        break
      case "minContentWidth":
        this.node.setMinContentWidth(newValue)
        break
      case "overlayScrolling":
        this.node.setOverlayScrolling(newValue)
        break
      case "propagateNaturalHeight":
        this.node.setPropagateNaturalHeight(newValue)
        break
      case "propagateNaturalWidth":
        this.node.setPropagateNaturalWidth(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollbarPolicy":
        this.node.vscrollbarPolicy = newValue
        break
      case "windowPlacement":
        this.node.windowPlacement = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onEdgeOvershot":
        this.setHandler("edge-overshot", newValue)
        break
      case "onEdgeReached":
        this.setHandler("edge-reached", newValue)
        break
      case "onMoveFocusOut":
        this.setHandler("move-focus-out", newValue)
        break
      case "onScrollChild":
        this.setHandler("scroll-child", newValue)
        break
    }
  }
}
