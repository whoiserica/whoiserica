import React from "react"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import { setup, render } from "../../src/test-support/index.js"
import useStylesheet, {
  useInlineStylesheet,
} from "../../src/hooks/useStylesheet.js"

let provider
let display

beforeEach(() => {
  setup()
  display = {}
  Gdk.Display.getDefault.mockImplementation(() => display)
})

describe("useStylesheet", () => {
  const path = "/path/to/stylesheet.css"

  const Component = () => {
    provider = useStylesheet(path)
  }

  test("should load from the specified path", () => {
    render(<Component />)

    expect(provider).toBeInstanceOf(Gtk.CssProvider)
    expect(provider.loadFromPath).toHaveBeenCalledWith(path)

    expect(Gtk.StyleContext.addProviderForDisplay).toHaveBeenCalledWith(
      display,
      provider,
      Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
    )
  })

  test("should remove the provider on unmount", () => {
    render(<Component />)

    render(null)

    expect(Gtk.StyleContext.removeProviderForDisplay).toHaveBeenCalledWith(
      display,
      provider
    )
  })
})

describe("useInlineStylesheet", () => {
  const content = "body { background-color: #000; }"

  const Component = () => {
    provider = useInlineStylesheet(content)
  }

  test("should load from the provided content", () => {
    render(<Component />)

    expect(provider.loadFromData).toHaveBeenCalledWith(Buffer.from(content), -1)
  })

  test("should remove the provider on unmount", () => {
    render(<Component />)

    render(null)

    expect(Gtk.StyleContext.removeProviderForDisplay).toHaveBeenCalledWith(
      display,
      provider
    )
  })
})
