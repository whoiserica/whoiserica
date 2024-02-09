import { Container, Gtk } from ".."
import Widget from "../widget"

export default class Paned extends Widget {
  createNode(container: Container) {
    return new Gtk.Paned()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "endChild":
        this.node.setEndChild(newValue)
        break
      case "maxPosition":
        this.node.setMaxPosition(newValue)
        break
      case "minPosition":
        this.node.setMinPosition(newValue)
        break
      case "position":
        this.node.setPosition(newValue)
        break
      case "positionSet":
        this.node.setPositionSet(newValue)
        break
      case "resizeEndChild":
        this.node.setResizeEndChild(newValue)
        break
      case "resizeStartChild":
        this.node.setResizeStartChild(newValue)
        break
      case "shrinkEndChild":
        this.node.setShrinkEndChild(newValue)
        break
      case "shrinkStartChild":
        this.node.setShrinkStartChild(newValue)
        break
      case "startChild":
        this.node.setStartChild(newValue)
        break
      case "wideHandle":
        this.node.setWideHandle(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onAcceptPosition":
        if (oldValue) {
          this.node.off("accept-position", oldValue)
        }
        if (newValue) {
          this.node.on("accept-position", newValue)
        }
        break
      case "onCancelPosition":
        if (oldValue) {
          this.node.off("cancel-position", oldValue)
        }
        if (newValue) {
          this.node.on("cancel-position", newValue)
        }
        break
      case "onCycleChildFocus":
        if (oldValue) {
          this.node.off("cycle-child-focus", oldValue)
        }
        if (newValue) {
          this.node.on("cycle-child-focus", newValue)
        }
        break
      case "onCycleHandleFocus":
        if (oldValue) {
          this.node.off("cycle-handle-focus", oldValue)
        }
        if (newValue) {
          this.node.on("cycle-handle-focus", newValue)
        }
        break
      case "onMoveHandle":
        if (oldValue) {
          this.node.off("move-handle", oldValue)
        }
        if (newValue) {
          this.node.on("move-handle", newValue)
        }
        break
      case "onToggleHandleFocus":
        if (oldValue) {
          this.node.off("toggle-handle-focus", oldValue)
        }
        if (newValue) {
          this.node.on("toggle-handle-focus", newValue)
        }
        break
      default:
        break
    }
  }
}
