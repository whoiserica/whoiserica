import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Overlay = "Overlay"
const OverlayContext = React.createContext<Gtk.Overlay | undefined>(undefined)

type Props = JSX.IntrinsicElements["Overlay"] & {
  children: React.ReactNode
}

const OverlayComponent = forwardRef<Gtk.Overlay, Props>(
  function OverlayComponent({ children, ...props }, ref) {
    const [overlayNode, setOverlayNode] = useState<Gtk.Overlay | undefined>(
      undefined
    )

    useImperativeHandle(ref, () => overlayNode!)

    const overlayRef = useCallback((node: Gtk.Overlay) => {
      setOverlayNode(node)
    }, [])

    return (
      <OverlayContext.Provider value={overlayNode}>
        <Overlay ref={overlayRef} {...props}>
          {children}
        </Overlay>
      </OverlayContext.Provider>
    )
  }
)

interface ChildProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const OverlayChild = function OverlayChild({ children }: ChildProps) {
  const overlayNode = useContext(OverlayContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | undefined>(undefined)

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      setChildNode(node)
    },
  })

  useEffect(() => {
    if (!overlayNode || !childNode) {
      return
    }

    overlayNode.setChild(childNode)

    return () => {
      overlayNode.setChild(null)
    }
  }, [overlayNode, childNode])

  return childWithRef
}

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
}

const OverlayItem = function OverlayItem({ children }: ItemProps) {
  const overlayNode = useContext(OverlayContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | undefined>(undefined)

  const childWithRef = React.cloneElement(children, {
    ref: (node: Gtk.Widget) => {
      setChildNode(node)
    },
  })

  useEffect(() => {
    if (!overlayNode || !childNode) {
      return
    }

    overlayNode.addOverlay(childNode)

    return () => {
      overlayNode.removeOverlay(childNode)
    }
  }, [overlayNode, childNode])

  return childWithRef
}

export default {
  Container: OverlayComponent,
  Child: OverlayChild,
  Item: OverlayItem,
}
