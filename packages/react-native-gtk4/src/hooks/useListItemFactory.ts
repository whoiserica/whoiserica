import GObject from "@girs/node-gobject-2.0"
import Gtk from "@girs/node-gtk-4.0"
import React, { createRef, useEffect, useMemo } from "react"
import { createContainer, destroyContainer } from "../container.js"
import { createReconciler } from "../reconciler.js"
import useList from "./useList.js"

export type ListItemFactoryRenderFunction<T> = (
  value: T | null
) => React.ReactElement & React.RefAttributes<Gtk.Widget>

export default function useListItemFactory<T>(
  render?: ListItemFactoryRenderFunction<T>
): Gtk.SignalListItemFactory | null {
  const factory = useMemo(() => new Gtk.SignalListItemFactory(), [])
  const { items } = useList<T>()

  useEffect(() => {
    if (!render) {
      return
    }

    const reconciler = createReconciler()

    const onFactorySetup = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      const ref = createRef<Gtk.Widget>()
      const element = render(null)
      const container = createContainer(listItem, reconciler)

      container.render(
        React.cloneElement(element, {
          ref,
        })
      )

      container.commit()
      listItem.setChild(ref.current)
    }

    const onFactoryTeardown = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      listItem.setChild(null)
      destroyContainer(listItem)
    }

    const onFactoryBind = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      const container = createContainer(listItem)
      const item = items[listItem.position]

      container.render(render(item))
    }

    const onFactoryUnbind = (object: GObject.Object) => {
      const listItem = object as Gtk.ListItem
      const container = createContainer(listItem)
      container.render(render(null))
    }

    factory.on("bind", onFactoryBind)
    factory.on("unbind", onFactoryUnbind)
    factory.on("setup", onFactorySetup)
    factory.on("teardown", onFactoryTeardown)

    return () => {
      factory.off("bind", onFactoryBind)
      factory.off("unbind", onFactoryUnbind)
      factory.off("setup", onFactorySetup)
      factory.off("teardown", onFactoryTeardown)
    }
  }, [render])

  return render ? factory : null
}
