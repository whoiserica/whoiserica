import React, { useCallback, useImperativeHandle, useRef } from "react"
import { forwardRef } from "react"
import Gtk from "@girs/node-gtk-4.0"
import { CenterBox } from "../generated/intrinsics.js"

type Props = Omit<
  JSX.IntrinsicElements["CenterBox"],
  "startWidget" | "endWidget" | "centerWidget" | "children"
> & {
  start?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  end?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
  children?: React.ReactElement<JSX.IntrinsicElements["Widget"]> | null
}

export default forwardRef<Gtk.CenterBox, Props>(function CenterBoxComponent(
  { start, end, children, ...props },
  ref
) {
  const centerBoxRef = useRef<Gtk.CenterBox | null>(null)
  const startRef = useRef<Gtk.Widget | null>(null)
  const centerRef = useRef<Gtk.Widget | null>(null)
  const endRef = useRef<Gtk.Widget | null>(null)

  const commitMount = useCallback(() => {
    if (!centerBoxRef.current) {
      return
    }

    if (startRef.current) {
      startRef.current.unparent()
      centerBoxRef.current.setStartWidget(startRef.current)
    }

    if (centerRef.current) {
      centerRef.current.unparent()
      centerBoxRef.current.setCenterWidget(centerRef.current)
    }

    if (endRef.current) {
      endRef.current.unparent()
      centerBoxRef.current.setEndWidget(endRef.current)
    }
  }, [])

  const setStartRef = useCallback((node: Gtk.Widget | null) => {
    startRef.current = node
    commitMount()
  }, [])

  const setEndRef = useCallback((node: Gtk.Widget | null) => {
    endRef.current = node
    commitMount()
  }, [])

  const setCenterRef = useCallback((node: Gtk.Widget | null) => {
    centerRef.current = node
    commitMount()
  }, [])

  const setCenterBoxRef = useCallback((node: Gtk.CenterBox | null) => {
    centerBoxRef.current = node
    commitMount()
  }, [])

  useImperativeHandle(ref, () => centerBoxRef.current!)

  return (
    <CenterBox ref={setCenterBoxRef} {...props}>
      {start
        ? React.cloneElement(start, {
            ref: setStartRef,
          })
        : null}
      {children
        ? React.cloneElement(children, {
            ref: setCenterRef,
          })
        : null}
      {end
        ? React.cloneElement(end, {
            ref: setEndRef,
          })
        : null}
    </CenterBox>
  )
})
