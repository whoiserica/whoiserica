import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

type Props = Omit<JSX.IntrinsicElements["Popover"], "defaultWidget" | "ref"> & {
  defaultWidget?: React.ReactElement
}

const Popover = "Popover"

export default forwardRef<Gtk.Popover, Props>(function PopoverComponent(
  { defaultWidget, ...props },
  ref
) {
  const [defaultWidgetNode, setDefaultWidgetNode] = useState<
    Gtk.Widget | undefined
  >()
  const defaultWidgetRef = useCallback((node: Gtk.Widget) => {
    setTimeout(() => setDefaultWidgetNode(node))
  }, [])
  const defaultWidgetElement = defaultWidget
    ? React.cloneElement(defaultWidget, {
        ref: defaultWidgetRef,
      })
    : null
  return (
    <>
      {defaultWidgetElement}
      <Popover ref={ref} defaultWidget={defaultWidgetNode} {...props} />
    </>
  )
})
