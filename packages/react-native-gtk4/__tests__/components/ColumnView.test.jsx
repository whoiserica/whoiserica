import React, { createRef } from "react"
import { render, setup, findBy } from "../../test-support/index.js"
import { Box } from "../../src/generated/intrinsics.js"
import ColumnView from "../../src/components/ColumnView.js"
import Gtk from "@girs/node-gtk-4.0"
import ListProvider from "../../src/components/ListProvider.js"
import * as useListItemFactoryModule from "../../src/hooks/useListItemFactory.js"

describe("ColumnView", () => {
  beforeEach(setup)

  test("should render", () => {
    render(
      <ListProvider.Container>
        <ColumnView
          columns={[{ title: "Column 1" }]}
          renderCell={() => <Box />}
        />
      </ListProvider.Container>
    )

    const columnView = findBy({ type: "ColumnView" })
    expect(columnView.node).toBeInstanceOf(Gtk.ColumnView)
  })

  test("should forward refs", () => {
    const ref = createRef()

    render(
      <ListProvider.Container>
        <ColumnView ref={ref} columns={[{ title: "Column 1" }]} />
      </ListProvider.Container>
    )

    const columnView = findBy({ type: "ColumnView" })
    expect(ref.current).toBe(columnView.node)
  })

  test("should handle columns", () => {
    const ref = createRef()

    render(
      <ListProvider.Container>
        <ColumnView
          columns={[{ title: "Column 1" }, { title: "Column 2" }]}
          ref={ref}
        />
      </ListProvider.Container>
    )

    expect(ref.current).toBeInstanceOf(Gtk.ColumnView)
    expect(ref.current.insertColumn).toHaveBeenCalledTimes(2)

    expect(ref.current.insertColumn).toHaveBeenNthCalledWith(
      1,
      0,
      expect.any(Gtk.ColumnViewColumn)
    )

    expect(ref.current.insertColumn).toHaveBeenNthCalledWith(
      2,
      1,
      expect.any(Gtk.ColumnViewColumn)
    )
  })

  test("should handle unmount gracefully", () => {
    render(
      <ListProvider.Container>
        <ColumnView columns={[{ title: "Column 1" }]} />
      </ListProvider.Container>
    )

    render(null)

    const columnView = findBy({ type: "ColumnView" })
    expect(columnView).toBeNull()
  })

  test("should throw error if renderCell is not defined", () => {
    jest.spyOn(useListItemFactoryModule, "default")

    render(
      <ListProvider.Container>
        <ColumnView columns={[{ title: "Column 1" }]} />
      </ListProvider.Container>
    )

    const renderFn = useListItemFactoryModule.default.mock.calls[0][0]

    expect(() => renderFn()).toThrow("Expected renderCell to be defined")
  })

  test("should call renderCell with correct arguments", () => {
    jest.spyOn(useListItemFactoryModule, "default")

    const item = {}
    const listItem = new Gtk.ListItem()
    const renderCell = jest.fn()

    render(
      <ListProvider.Container>
        <ColumnView columns={[{ title: "Column 1" }]} renderCell={renderCell} />
      </ListProvider.Container>
    )

    const renderFn = useListItemFactoryModule.default.mock.calls[0][0]

    renderFn(item, listItem)

    expect(renderCell).toHaveBeenCalledWith(item, 0, listItem)
  })
})
