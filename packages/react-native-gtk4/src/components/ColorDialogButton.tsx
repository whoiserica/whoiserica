import React, { useMemo } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { ColorDialogButton } from "../generated/intrinsics.js"

type ColorDialog = Pick<Gtk.ColorDialog, "title" | "modal">

type Props = Omit<
  JSX.IntrinsicElements["ColorDialogButton"],
  "children" | "dialog"
> &
  Partial<ColorDialog>

const ColorDialogButtonComponent = forwardRef<Gtk.ColorDialogButton, Props>(
  function ColorDialogButtonComponent({ title, modal = true, ...props }, ref) {
    if (!Gtk.ColorDialog) {
      return null
    }

    const dialog = useMemo(
      () =>
        new Gtk.ColorDialog({
          title,
          modal,
        }),
      [title, modal]
    )

    return <ColorDialogButton ref={ref} dialog={dialog} {...props} />
  }
)

export default ColorDialogButtonComponent
