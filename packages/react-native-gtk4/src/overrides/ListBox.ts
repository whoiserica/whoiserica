import ListBox from "../generated/widgets/ListBox.js"
import AnyWidget from "../widget.js"

const parent = {
  appendChild: ListBox.prototype.appendChild,
  removeChild: ListBox.prototype.removeChild,
  insertBefore: ListBox.prototype.insertBefore,
}

ListBox.prototype.appendChild = function (this: ListBox, child: AnyWidget) {
  parent.appendChild.call(this, child)
  this.node.append(child.node)
}

ListBox.prototype.removeChild = function (this: ListBox, child: AnyWidget) {
  parent.removeChild.call(this, child)
  this.node.remove(child.node)
}

ListBox.prototype.insertBefore = function (
  this: ListBox,
  child: AnyWidget,
  beforeChild: AnyWidget
) {
  const afterIndex = this.children.indexOf(beforeChild) - 1

  if (afterIndex < 0) {
    this.node.prepend(child.node)
  } else {
    this.node.insert(child.node, afterIndex)
  }

  parent.insertBefore.call(this, child, beforeChild)
}
