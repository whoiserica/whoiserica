import React, { useState } from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  Gtk,
  useApplication,
} from "react-native-gtk4"

export default function App() {
  const [count, setCount] = useState(0)
  const { quit } = useApplication()
  const [showDecrementWindow, setShowDecrementWindow] = useState(true)

  return (
    <>
      <ApplicationWindow title="Increment" onCloseRequest={quit}>
        <Box orientation={Gtk.Orientation.VERTICAL}>
          <>Shared counter: {count}</>
          <Button
            label="Increment Counter"
            onClicked={() => {
              setCount((count) => count + 1)
            }}
          />
        </Box>
      </ApplicationWindow>
      {showDecrementWindow ? (
        <ApplicationWindow
          title="Decrement"
          onCloseRequest={() => {
            setShowDecrementWindow(false)
            return true
          }}
        >
          <Box orientation={Gtk.Orientation.VERTICAL}>
            <>Shared counter: {count}</>
            <Button
              label="Decrement Counter"
              onClicked={() => {
                setCount((count) => count - 1)
              }}
            />
          </Box>
        </ApplicationWindow>
      ) : null}
    </>
  )
}
