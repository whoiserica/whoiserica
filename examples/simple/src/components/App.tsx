import React from "react"
import { ApplicationWindow, Box, Button, Gtk } from "react-native-gtk4"

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <ApplicationWindow title="Hello World">
        <Box orientation={Gtk.Orientation.VERTICAL}>
          <>Hello World! You clicked {count} times.</>
          <Button
            label="Click Me"
            onClicked={() => {
              setCount((count) => count + 1)
            }}
          />
        </Box>
      </ApplicationWindow>
    </>
  )
}
