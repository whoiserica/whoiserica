import React from "react"
import { render, setupRenderer } from "../../src/test-support/render.js"
import PopoverMenu from "../../src/components/PopoverMenu.js"
import { Button, Label } from "../../src/generated/intrinsics.js"
import { mockProperty } from "../../src/test-support/utils.js"
import Gtk from "@girs/node-gtk-4.0"

describe("PopoverMenu", () => {
  beforeEach(() => {
    setupRenderer()
    mockProperty(Gtk.PopoverMenu, "child")
    mockProperty(Gtk.PopoverMenu, "parent")
  })

  test("should render correctly with a child and content", () => {
    const container = render(
      <PopoverMenu open={true} content={<Label text="PopoverMenu content" />}>
        <Button label="Click me!" />
      </PopoverMenu>
    )

    const popover = container.findByType("PopoverMenu")
    const button = container.findByType("Button")
    const label = container.findByType("Label")

    expect(popover.node.child).toBe(label.node)
    expect(popover.node.parent).toBe(button.node)
  })

  test("should open and close the popover when the open prop changes", () => {
    const container = render(
      <PopoverMenu open={false} content={<Label text="PopoverMenu content" />}>
        <Button label="Click me!" />
      </PopoverMenu>
    )

    const popover = container.findByType("PopoverMenu")

    expect(popover.node.popup).not.toHaveBeenCalled()

    render(
      <PopoverMenu open={true} content={<Label text="PopoverMenu content" />}>
        <Button label="Click me!" />
      </PopoverMenu>
    )

    expect(popover.node.popup).toHaveBeenCalled()
  })

  test("should be closed by default", () => {
    const container = render(
      <PopoverMenu content={<Label text="PopoverMenu content" />}>
        <Button label="Click me!" />
      </PopoverMenu>
    )

    const popover = container.findByType("PopoverMenu")

    expect(popover.node.popup).not.toHaveBeenCalled()
    expect(popover.node.popdown).toHaveBeenCalled()
  })

  test("should handle unmount gracefully", () => {
    jest.spyOn(React, "useRef")

    render(
      <PopoverMenu open={true} content={<Label text="PopoverMenu content" />}>
        <Button label="Click me!" />
      </PopoverMenu>
    )

    Gtk.PopoverMenu.prototype.popup.mockClear()
    Gtk.PopoverMenu.prototype.popdown.mockClear()

    for (const ref of React.useRef.mock.results.map((r) => r.value)) {
      ref.current = null
    }

    render(null)

    expect(Gtk.PopoverMenu.prototype.popup).not.toHaveBeenCalled()
    expect(Gtk.PopoverMenu.prototype.popdown).not.toHaveBeenCalled()
  })
})
