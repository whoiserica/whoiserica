import React, { useState } from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  Grid,
  Gtk,
  Label,
  Notebook,
  Overlay,
  Stack,
  ListBox,
  ListBoxRow,
  Image,
  Paned,
  Expander,
  CheckButton,
  HeaderBar,
  Popover,
  Revealer,
  Entry,
  ProgressBar,
  Scale,
  SearchBar,
  Spinner,
  Switch,
  TextView,
  AboutDialog,
  CenterBox,
  useApplication,
  ActionBar,
  ColorDialogButton,
  EmojiChooser,
  CssProvider,
  FontDialogButton,
  PageSetupUnixDialog,
} from "react-native-gtk4"

export default function App() {
  const [count, setCount] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [entryText, setEntryText] = useState("")
  const [searchText, setSearchText] = useState("")
  const [switchActive, setSwitchActive] = useState(false)
  const [searchModeEnabled, setSearchModeEnabled] = useState(false)
  const [showAboutDialog, setShowAboutDialog] = useState(false)
  const [showTitlebar, setShowTitlebar] = useState(true)
  const [stackVisibleChildName, setStackVisibleChildName] = useState("child1")
  const [notebookPage, setNotebookPage] = useState(0)
  const [showActionBarStart, setShowActionBarStart] = useState(true)
  const [showActionBarEnd, setShowActionBarEnd] = useState(true)
  const [actionBarText, setActionBarText] = useState("")
  const [selectedRadio, setSelectedRadio] = useState(0)
  const [emojiChooserOpen, setEmojiChooserOpen] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState("😊")
  const [showPageSetupDialog, setShowPageSetupDialog] = useState(false)
  const { quit } = useApplication()

  return (
    <>
      <ApplicationWindow
        title="Kitchen Sink"
        defaultWidth={800}
        defaultHeight={600}
        onCloseRequest={quit}
        titlebar={
          showTitlebar ? (
            <HeaderBar title={<Label label="Kitchen Sink" />}>
              <Label label="Header Bar 1" />
              <Button label="Header Bar 2" />
            </HeaderBar>
          ) : null
        }
      >
        <Grid.Container hexpand vexpand>
          <Grid.Item col={0} row={0} width={1} height={1}>
            <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
              <Box orientation={Gtk.Orientation.HORIZONTAL} hexpand>
                <Stack.Container
                  hexpand
                  vexpand
                  visibleChildName={stackVisibleChildName ?? ""}
                  onNotifyVisibleChildName={(stack) => {
                    setStackVisibleChildName(stack.visibleChildName ?? "")
                  }}
                >
                  <Stack.Sidebar hexpand vexpand />
                  <Stack.Item name="child1">
                    <Label label="Stack 1" />
                  </Stack.Item>
                  <Stack.Item name="child2">
                    <Label label="Stack 2" />
                  </Stack.Item>
                  <Stack.Item name="child3">
                    <Label label="Stack 3" />
                  </Stack.Item>
                </Stack.Container>
              </Box>
              <ActionBar.Container hexpand vexpand>
                {showActionBarStart ? (
                  <ActionBar.Section position="start">
                    <ActionBar.Item>
                      <Button
                        label="Action Bar 1"
                        onClicked={() => setShowActionBarEnd(!showActionBarEnd)}
                      />
                    </ActionBar.Item>
                  </ActionBar.Section>
                ) : null}
                <ActionBar.Section position="center">
                  <ActionBar.Item>
                    <Entry
                      text={actionBarText}
                      onChanged={(entry) => {
                        setActionBarText(entry.text ?? "")
                      }}
                      placeholderText="Type here..."
                    />
                  </ActionBar.Item>
                </ActionBar.Section>
                {showActionBarEnd ? (
                  <ActionBar.Section position="end">
                    <ActionBar.Item>
                      <Button
                        label="Action Bar 2"
                        onClicked={() =>
                          setShowActionBarStart(!showActionBarStart)
                        }
                      />
                    </ActionBar.Item>
                  </ActionBar.Section>
                ) : null}
              </ActionBar.Container>
              <Overlay
                content={
                  <Box hexpand vexpand>
                    <EmojiChooser
                      open={emojiChooserOpen}
                      onEmojiPicked={(_, emoji) => {
                        setSelectedEmoji(emoji ?? "")
                      }}
                      onShow={() => {
                        setEmojiChooserOpen(true)
                      }}
                      onHide={() => {
                        setEmojiChooserOpen(false)
                      }}
                    >
                      <Button
                        label="Emoji Chooser"
                        onClicked={() => {
                          setEmojiChooserOpen(!emojiChooserOpen)
                        }}
                      />
                    </EmojiChooser>
                  </Box>
                }
                hexpand
                vexpand
              >
                <CssProvider
                  content={`
                  .emoji-label {
                    font-size: 40px;
                  }
                `}
                >
                  <Label
                    label={selectedEmoji}
                    canTarget={false}
                    hexpand
                    vexpand
                    cssClasses={["emoji-label"]}
                  />
                </CssProvider>
              </Overlay>
              <Notebook.Container
                hexpand
                vexpand
                page={notebookPage}
                onChangeCurrentPage={(notebook) => {
                  setNotebookPage(notebook.getCurrentPage())
                  return false
                }}
              >
                <Notebook.Tab label="Tab 1">
                  <Label label="Notebook 1" />
                </Notebook.Tab>
                <Notebook.Tab label="Tab 2">
                  <Label label="Notebook 2" />
                </Notebook.Tab>
              </Notebook.Container>
              <Button
                label={`Button ${count}`}
                onClicked={() => {
                  setCount((count) => count + 1)
                  setTimeout(() => {
                    setCount((count) => count - 1)
                  }, 1000)
                }}
              />
              <Button
                label="Toggle Titlebar"
                onClicked={() => {
                  setShowTitlebar(!showTitlebar)
                }}
              />
            </Box>
          </Grid.Item>
          <Grid.Item col={1} row={0} width={1} height={1}>
            <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
              <ListBox hexpand vexpand>
                <ListBoxRow>
                  <Label label="List Box 1" />
                </ListBoxRow>
                <ListBoxRow>
                  <Label label="List Box 2" />
                </ListBoxRow>
              </ListBox>
              <Spinner spinning />
              <ProgressBar fraction={0.5} showText />
              <Scale digits={1} drawValue />
              <SearchBar searchModeEnabled={searchModeEnabled}>
                <Entry
                  text={searchText}
                  onChanged={(entry) => {
                    setSearchText(entry.text ?? "")
                  }}
                />
              </SearchBar>
              <Button
                label="Toggle Search Mode"
                onClicked={() => {
                  setSearchModeEnabled(!searchModeEnabled)
                }}
              />
              <Entry
                text={entryText}
                onChanged={(entry) => {
                  setEntryText(entry.text ?? "")
                }}
                placeholderText="Type here..."
              />
              <TextView />
              <CheckButton label="Check Button 1" active />
              <CheckButton label="Check Button 2" />
              <CheckButton
                label="Radio Button 1"
                radio
                active={selectedRadio === 0}
                onToggled={() => setSelectedRadio(0)}
              />
              <CheckButton
                label="Radio Button 2"
                radio
                active={selectedRadio === 1}
                onToggled={() => setSelectedRadio(1)}
              />
              <CheckButton
                label="Radio Button 3"
                radio
                active={selectedRadio === 2}
                onToggled={() => setSelectedRadio(2)}
              />
              <CheckButton
                label="Radio Button 4"
                radio
                active={selectedRadio === 3}
                onToggled={() => setSelectedRadio(3)}
              />
              <Box>
                <Switch
                  active={switchActive}
                  onActivate={(node) => {
                    setSwitchActive(node.active)
                  }}
                />
              </Box>
              <CenterBox
                start={<Label label="Center Box Start" />}
                end={<Label label="Center Box End" />}
                hexpand
                vexpand
              >
                <Label label="Center Box Center" />
              </CenterBox>
            </Box>
          </Grid.Item>
          <Grid.Item col={0} row={1} width={1} height={1}>
            <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
              <Paned hexpand vexpand>
                <Label label="Paned Start" />
                <Label label="Paned End" />
              </Paned>
              <ColorDialogButton title="Color Dialog" hexpand vexpand />
              <FontDialogButton title="Font Dialog" hexpand vexpand />
              <Button
                onClicked={() => setShowPageSetupDialog(true)}
                label="Page Setup Dialog"
              />
              {showPageSetupDialog ? (
                <PageSetupUnixDialog
                  title="Page Setup Unix Dialog"
                  hexpand
                  vexpand
                  onResponse={() => {
                    setShowPageSetupDialog(false)
                  }}
                  onCloseRequest={() => {
                    setShowPageSetupDialog(false)
                    return false
                  }}
                />
              ) : null}
            </Box>
          </Grid.Item>
          <Grid.Item col={1} row={1} width={1} height={1}>
            <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
              <Expander label={<Label label="Expander" />} hexpand vexpand>
                <Label label="Expander Content" />
              </Expander>
              <Button
                onClicked={() => {
                  setRevealed(!revealed)
                }}
                label="Reveal"
              />
              <Revealer revealChild={revealed} hexpand vexpand>
                <Label label="Revealer" />
              </Revealer>
              <Popover
                open={popoverOpen}
                hexpand
                vexpand
                content={<Label label="Popover" />}
                onShow={() => {
                  setPopoverOpen(true)
                }}
                onHide={() => {
                  setPopoverOpen(false)
                }}
              >
                <Button
                  label="Popover"
                  onClicked={() => {
                    setPopoverOpen(!popoverOpen)
                  }}
                />
              </Popover>
              <Button
                label={
                  showAboutDialog ? "Hide About Dialog" : "Show About Dialog"
                }
                onClicked={() => {
                  setShowAboutDialog(!showAboutDialog)
                }}
              />
            </Box>
          </Grid.Item>
        </Grid.Container>
      </ApplicationWindow>
      {showAboutDialog ? (
        <AboutDialog
          artists={["Artist 1", "Artist 2"]}
          authors={["Author 1", "Author 2"]}
          comments="Comments"
          copyright="Copyright"
          onCloseRequest={() => {
            setShowAboutDialog(false)
            return false
          }}
          creditSections={[
            {
              name: "Section 1",
              people: ["Person 1", "Person 2"],
            },
          ]}
        />
      ) : null}
    </>
  )
}
