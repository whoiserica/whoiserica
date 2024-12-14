import React from "react"
import { useState, useCallback, forwardRef } from "react"
import { Gtk } from "../../index.js"

const Window = "Window"

export default forwardRef<Gtk.Window, JSX.IntrinsicElements["Window"]>(
  function WindowComponent({ defaultWidget, titlebar, ...props }, ref) {
    const [defaultWidgetRef, setDefaultWidgetRef] = useState<
      Gtk.Widget | undefined
    >()
    useCallback((node: Gtk.Widget) => {
      setDefaultWidgetRef(node)
    }, [])
    const [titlebarRef, setTitlebarRef] = useState<Gtk.Widget | undefined>()
    useCallback((node: Gtk.Widget) => {
      setTitlebarRef(node)
    }, [])
    return (
      <>
        {defaultWidget}
        {titlebar}
        <Window
          ref={ref}
          defaultWidget={defaultWidgetRef}
          titlebar={titlebarRef}
          {...props}
        />
      </>
    )
  }
)
