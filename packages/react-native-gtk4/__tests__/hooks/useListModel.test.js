import React from "react"
import { render, setup } from "../../test-support/index.js"
import useListModel from "../../src/hooks/useListModel.js"
import ListModelProvider from "../../src/components/ListModelProvider.js"
import Gtk from "@girs/node-gtk-4.0"

describe("useListModel", () => {
  let listModel

  beforeEach(setup)

  const Component = function () {
    listModel = useListModel()
    return null
  }

  test("should return list context", () => {
    const model = new Gtk.StringList()

    render(
      <ListModelProvider model={model}>
        <Component />
      </ListModelProvider>
    )

    expect(listModel).toMatchObject({
      items: {},
      setItems: expect.any(Function),
      model,
    })
  })

  test("should throw when no model context is available", () => {
    expect(() => render(<Component />)).toThrow(
      "useListModel must be used within a ListModelProvider"
    )
  })
})
