import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { forwardRef } from "react"
import { Gtk } from "../index.js"

const Grid = "Grid"
const GridContext = React.createContext<Gtk.Grid | null>(null)

type Props = JSX.IntrinsicElements["Grid"] & {
  children: React.ReactNode
}

const GridContainer = forwardRef<Gtk.Grid, Props>(function GridContainer(
  { children, ...props },
  ref
) {
  const [gridNode, setGridNode] = useState<Gtk.Grid | null>(null)

  useImperativeHandle(ref, () => gridNode!)

  const gridRef = (node: Gtk.Grid | null) => {
    setGridNode(node)
  }

  return (
    <GridContext.Provider value={gridNode}>
      <Grid ref={gridRef} {...props}>
        {children}
      </Grid>
    </GridContext.Provider>
  )
})

interface ItemProps {
  children: React.ReactElement<JSX.IntrinsicElements["Widget"]>
  col?: number
  row?: number
  width?: number
  height?: number
}

const GridItem = function GridItem({
  children,
  col = 0,
  row = 0,
  width = 1,
  height = 1,
}: ItemProps) {
  const gridNode = useContext(GridContext)
  const [childNode, setChildNode] = useState<Gtk.Widget | null>(null)

  const childRef = (node: Gtk.Widget | null) => {
    setChildNode(node)
  }

  const childWithRef = React.cloneElement(children, {
    ref: childRef,
  })

  useEffect(() => {
    if (!gridNode || !childNode) {
      return
    }

    gridNode.attach(childNode, col, row, width, height)

    return () => {
      gridNode.remove(childNode)
    }
  }, [gridNode, childNode, col, row, width, height])

  return childWithRef
}

export default {
  Container: GridContainer,
  Item: GridItem,
}
