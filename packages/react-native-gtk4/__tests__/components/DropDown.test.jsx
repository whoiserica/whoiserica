import React, { createRef } from "react"
import { render, setup, findBy } from "../../src/test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import DropDown from "../../src/components/DropDown.js"
import Gtk from "@girs/node-gtk-4.0"

describe("DropDown", () => {
  beforeEach(setup)

  describe("Container", () => {
    test("should render", () => {
      render(
        <DropDown.Container>
          <Box />
        </DropDown.Container>
      )

      const dropDown = findBy({ type: "DropDown" })
      const child = findBy({ type: "Box" })

      expect(dropDown.node).toBeInstanceOf(Gtk.DropDown)
      expect(child.node).toBeInstanceOf(Gtk.Box)
    })

    test("should forward refs", () => {
      const ref = createRef()

      render(<DropDown.Container ref={ref} />)

      const dropDown = findBy({ type: "DropDown" })

      expect(ref.current).toBe(dropDown.node)
    })

    test("should handle unmount gracefully", () => {
      render(<DropDown.Container />)

      render(null)

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown).toBeNull()
    })

    test("should setup factories", () => {
      render(<DropDown.Container renderItem={() => null} />)

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown.node.setFactory).toHaveBeenCalledWith(
        expect.any(Gtk.SignalListItemFactory)
      )

      expect(dropDown.node.setListFactory).toHaveBeenCalledWith(
        expect.any(Gtk.SignalListItemFactory)
      )

      const [factory] = dropDown.node.setFactory.mock.calls[0]
      const [listFactory] = dropDown.node.setListFactory.mock.calls[0]

      expect(factory.on).toHaveBeenCalledWith("bind", expect.any(Function))
      expect(factory.on).toHaveBeenCalledWith("unbind", expect.any(Function))
      expect(listFactory.on).toHaveBeenCalledWith("bind", expect.any(Function))

      expect(listFactory.on).toHaveBeenCalledWith(
        "unbind",
        expect.any(Function)
      )
    })

    test("should unset factories", () => {
      render(<DropDown.Container renderItem={() => null} />)

      const dropDown = findBy({ type: "DropDown" })

      render(<DropDown.Container />)

      expect(dropDown.node.setFactory).toHaveBeenNthCalledWith(2, null)
      expect(dropDown.node.setListFactory).toHaveBeenNthCalledWith(2, null)
    })

    test("should teardown factories on unmount", () => {
      render(<DropDown.Container renderItem={() => null} />)

      const dropDown = findBy({ type: "DropDown" })

      const [factory] = dropDown.node.setFactory.mock.calls[0]
      const [listFactory] = dropDown.node.setListFactory.mock.calls[0]
      const [, onFactoryBind] = factory.on.mock.calls[0]
      const [, onFactoryUnbind] = factory.on.mock.calls[1]
      const [, onListFactoryBind] = listFactory.on.mock.calls[0]
      const [, onListFactoryUnbind] = listFactory.on.mock.calls[1]

      render(null)

      expect(factory.off).toHaveBeenCalledWith("bind", onFactoryBind)
      expect(factory.off).toHaveBeenCalledWith("unbind", onFactoryUnbind)
      expect(listFactory.off).toHaveBeenCalledWith("bind", onListFactoryBind)

      expect(listFactory.off).toHaveBeenCalledWith(
        "unbind",
        onListFactoryUnbind
      )
    })

    test("should set model", () => {
      render(<DropDown.Container />)

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown.node.setModel).toHaveBeenCalledWith(
        expect.any(Gtk.StringList)
      )
    })
  })

  describe("Item", () => {
    test("should handle unmount gracefully", () => {
      render(
        <DropDown.Container>
          <DropDown.Item />
        </DropDown.Container>
      )

      render(null)

      const dropDown = findBy({ type: "DropDown" })

      expect(dropDown).toBeNull()
    })

    test("should throw when not in a container", () => {
      expect(() => render(<DropDown.Item />)).toThrow(
        "DropDown.Item must be used inside a DropDown.Container"
      )
    })

    test("should append item to model", () => {
      const value = "foo"
      const id = "bar"

      render(
        <DropDown.Container>
          <DropDown.Item id={id} value={value} />
        </DropDown.Container>
      )

      const dropDown = findBy({ type: "DropDown" })
      const [model] = dropDown.node.setModel.mock.calls[0]

      expect(model.append).toHaveBeenCalledWith(id)
    })

    test("should remove item from model when unmounting", async () => {
      const value = "foo"
      const id = "bar"
      const MockedStringList = Gtk.StringList

      Gtk.StringList = jest.fn(() => {
        const list = new MockedStringList()

        list.getString = () => id
        list.getNItems = () => 0

        return list
      })

      render(
        <DropDown.Container>
          <DropDown.Item id={id} value={value} />
        </DropDown.Container>
      )

      const dropDown = findBy({ type: "DropDown" })
      const [model] = dropDown.node.setModel.mock.calls[0]

      render(null)

      expect(model.remove).toHaveBeenCalledWith(0)
    })
  })
})
