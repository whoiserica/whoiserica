import React, { useState } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { Expander } from "../generated/intrinsics.js"
import { createPortal } from "../portal.js"
import useForwardedRef from "../hooks/useForwardedRef.js"

type Props = Omit<
  JSX.IntrinsicElements["Expander"],
  "labelWidget" | "label"
> & {
  label?:
    | string
    | ((React.ReactElement & React.RefAttributes<Gtk.Widget>) | null)
}

export default forwardRef<Gtk.Expander, Props>(function ExpanderComponent(
  { label, ...props },
  ref
) {
  const [labelWidget, setLabelWidget] = useState<Gtk.Widget | null>(null)
  const labelElement = typeof label !== "string" ? label : null
  const [, setLabelRef] = useForwardedRef(labelElement?.ref, setLabelWidget)

  return (
    <>
      {labelElement
        ? createPortal(
            React.cloneElement(labelElement, {
              ref: setLabelRef,
            })
          )
        : null}
      <Expander
        ref={ref}
        {...(typeof label === "string" ? { label } : { labelWidget })}
        {...props}
      />
    </>
  )
})
