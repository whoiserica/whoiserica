import React, { useCallback, useEffect, useMemo, useState } from "react"
import {
  ApplicationWindow,
  Box,
  Button,
  ColumnView,
  Grid,
  Gtk,
  Label,
  Notebook,
  Overlay,
  Stack,
  LevelBar,
  ListBox,
  ListBoxRow,
  MenuButton,
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
  FontDialogButton,
  PageSetupUnixDialog,
  PrintUnixDialog,
  DropDown,
  useActionGroup,
  useMenu,
  useInlineStylesheet,
  PopoverMenuBar,
  Frame,
  ListView,
  ListProvider,
  TreeProvider,
  TreeExpander,
  Calendar,
  SpinButton,
} from "react-native-gtk4"

enum Column {
  Name = 0,
  Description = 1,
}

export default function App() {
  const { quit, application } = useApplication()
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
  const [showPrintDialog, setShowPrintDialog] = useState(false)
  const [levelBarValue, setLevelBarValue] = useState(0.0)
  const [scaleValue, setScaleValue] = useState(0.0)
  const [listViewSelection, setListViewSelection] = useState([1, 3])
  const [columnViewSelection, setColumnViewSelection] = useState([2])
  const [dropDownSelectedItem, setDropDownSelectedItem] = useState(0)
  const [treeViewSelection, setTreeViewSelection] = useState([1, 3])
  const [selectedDay, setSelectedDay] = useState(1)
  const [calendarMonth, setCalendarMonth] = useState(1)
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear())

  const listItems = useMemo(() => {
    return Array.from(Array(500).keys()).map((i) => `Item ${i}`)
  }, [])

  const columnViewItems = useMemo(() => {
    return Array.from(Array(5).keys()).map((i) => ({
      name: `Name ${i}`,
      surname: `Surname ${i}`,
    }))
  }, [])

  const treeViewItems = useMemo(() => {
    return Array.from(Array(5).keys()).map((i) =>
      Array.from(Array(5).keys()).map((j) =>
        Array.from(Array(5).keys()).map((k) => `${i}.${j}.${k}`)
      )
    )
  }, [])

  const textViewBuffer = useMemo(() => {
    const value = new Gtk.TextBuffer()
    value.setText("Text Buffer", -1)
    const anchor = value.createChildAnchor(value.getEndIter())
    return { value, anchor }
  }, [])

  const spinButtonAdjustment = useMemo(() => {
    const adjustment = new Gtk.Adjustment({
      lower: 0,
      upper: 100,
    })

    adjustment.setStepIncrement(1)

    return adjustment
  }, [])

  const renderDropDownItem = useCallback(
    (item: string | null) => <Label label={item ?? ""} />,
    []
  )

  const renderCell = useCallback(
    (value: { name: string; surname: string } | null, column: number) => {
      switch (column) {
        case Column.Name:
          return <Label label={value?.name ?? ""} />
        case Column.Description:
          return <Label label={value?.surname ?? ""} />
        default:
          throw new Error(`Unexpected column: ${column}`)
      }
    },
    []
  )

  const renderTreeItem = useCallback(
    (value: string | null, item: Gtk.ListItem) => {
      return (
        <Box>
          <TreeExpander listRow={item.item as Gtk.TreeListRow} />
          <Label label={value ?? ""} />
        </Box>
      )
    },
    []
  )

  const actionGroup = useActionGroup(
    {
      increaseCount: () => {
        setCount((count) => count + 1)
      },
      decreaseCount: () => {
        setCount((count) => count - 1)
      },
    },
    []
  )

  const menu = useMenu(
    [
      {
        icon: "list-add",
        action: "menu.increaseCount",
      },
      {
        icon: "list-remove",
        action: "menu.decreaseCount",
      },
      {
        label: "Section",
        section: true,
        children: [
          {
            label: "Item 1",
          },
          {
            label: "Item 2",
          },
        ],
      },
      {
        label: "Submenu",
        children: [
          {
            label: "Item 3",
          },
          {
            label: "Item 4",
          },
        ],
      },
    ],
    []
  )

  const menuBar = useMenu(
    [
      {
        label: "File",
        icon: "document-new",
        children: [
          {
            label: "Open",
          },
          {
            label: "Save",
          },
          {
            label: "Save As",
          },
          {
            label: "Close",
          },
        ],
      },
      {
        label: "Edit",
        children: [
          {
            label: "Cut",
          },
          {
            label: "Copy",
          },
          {
            label: "Paste",
          },
        ],
      },
      {
        label: "Help",
        children: [
          {
            label: "About",
          },
        ],
      },
    ],
    []
  )

  useInlineStylesheet(`
    .emoji-label {
      font-size: 40px;
    }

    levelbar block.veryLow {
      background-color: #ff0000;
    }

    levelbar block.low {
      background-color: #ff8000;
    }

    levelbar block.medium {
      background-color: #ffff00;
    }

    levelbar block.high {
      background-color: #80ff00;
    }

    levelbar block.veryHigh {
      background-color: #00ff00;
    }   
  `)

  useEffect(() => {
    let timeout: number

    const increaseValue = () => {
      setLevelBarValue((value) => (value + 0.01) % 1.0)
      timeout = setTimeout(increaseValue, 100)
    }

    increaseValue()

    application.on("shutdown", () => {
      clearTimeout(timeout)
    })

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <ApplicationWindow
      title="Kitchen Sink"
      defaultWidth={800}
      defaultHeight={600}
      onCloseRequest={quit}
      titlebar={
        showTitlebar ? (
          <HeaderBar.Container title={<Label label="Kitchen Sink" />}>
            <HeaderBar.Section position="end">
              <Label label="Header Bar 1" />
            </HeaderBar.Section>
          </HeaderBar.Container>
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
              <Label
                label={selectedEmoji}
                canTarget={false}
                hexpand
                vexpand
                cssClasses={["emoji-label"]}
              />
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
            <ListProvider.Container>
              <ListProvider.List>
                {columnViewItems.map((item, i) => (
                  <ListProvider.Item key={i} value={item} />
                ))}
              </ListProvider.List>
              <ColumnView
                hexpand
                vexpand
                selectionMode={Gtk.SelectionMode.MULTIPLE}
                columns={[
                  { title: "Name", expand: true },
                  { title: "Surname", expand: true },
                ]}
                renderCell={renderCell}
                selection={columnViewSelection}
                onSelectionChanged={(
                  ids,
                  items: { name: string; surname: string }[]
                ) => {
                  console.log(items)
                  setColumnViewSelection(ids)
                }}
              />
            </ListProvider.Container>
            <TreeProvider.Container autoexpand={false}>
              <TreeProvider.List>
                {treeViewItems.map((item, i) => (
                  <TreeProvider.Item key={i} value={`${i}`}>
                    {item.map((item, j) => (
                      <TreeProvider.Item key={j} value={`${i}.${j}`}>
                        {item.map((item, k) => (
                          <TreeProvider.Item key={k} value={item} />
                        ))}
                      </TreeProvider.Item>
                    ))}
                  </TreeProvider.Item>
                ))}
              </TreeProvider.List>
              <ListView
                hexpand
                vexpand
                selectionMode={Gtk.SelectionMode.MULTIPLE}
                renderItem={renderTreeItem}
                selection={treeViewSelection}
                onSelectionChanged={(ids, items) => {
                  console.log(items)
                  setTreeViewSelection(ids)
                }}
              />
            </TreeProvider.Container>
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
            <Box
              orientation={Gtk.Orientation.VERTICAL}
              hexpand
              vexpand
              spacing={10}
            >
              <ProgressBar fraction={0.5} showText />
              <Frame label="Level Bar" hexpand vexpand>
                <LevelBar
                  value={levelBarValue}
                  offsets={{
                    veryLow: 0.1,
                    low: 0.25,
                    medium: 0.5,
                    high: 0.75,
                    veryHigh: 0.9,
                  }}
                  minValue={0}
                  maxValue={1}
                />
              </Frame>
            </Box>
            <Scale
              drawValue
              showFillLevel
              range={[0, 1]}
              onChangeValue={(_node, _scroll, value) => {
                setScaleValue(value ?? 0)
                return false
              }}
              value={scaleValue}
              marks={[
                { value: 0, position: Gtk.PositionType.BOTTOM, label: "0" },
                { value: 0.5, position: Gtk.PositionType.TOP, label: "0.5" },
                { value: 1, position: Gtk.PositionType.BOTTOM, label: "1" },
              ]}
            />
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
            <DropDown
              hexpand
              vexpand
              renderItem={renderDropDownItem}
              onSelectedItemChanged={(id, item) => {
                console.log(item)
                setDropDownSelectedItem(id)
              }}
              selectedItem={dropDownSelectedItem}
            >
              {listItems.map((item, i) => (
                <ListProvider.Item key={i} value={item} />
              ))}
            </DropDown>
            <ListProvider.Container>
              <ListView
                hexpand
                vexpand
                selectionMode={Gtk.SelectionMode.MULTIPLE}
                renderItem={renderDropDownItem}
                selection={listViewSelection}
                onSelectionChanged={(ids, items) => {
                  console.log(items)
                  setListViewSelection(ids)
                }}
              >
                <ListProvider.List>
                  {Array.from(Array(5).keys()).map((i) => (
                    <ListProvider.Item key={i} value={`Item ${i}`} />
                  ))}
                </ListProvider.List>
              </ListView>
            </ListProvider.Container>
          </Box>
        </Grid.Item>
        <Grid.Item col={0} row={1} width={1} height={1}>
          <Box orientation={Gtk.Orientation.VERTICAL} hexpand vexpand>
            <Paned hexpand vexpand>
              <Label label="Paned Start" />
              <Label label="Paned End" />
            </Paned>
            <Box orientation={Gtk.Orientation.HORIZONTAL} hexpand vexpand>
              <ColorDialogButton title="Color Dialog" hexpand vexpand />
              <FontDialogButton title="Font Dialog" hexpand vexpand />
              <Button
                onClicked={() => setShowPageSetupDialog(true)}
                label="Page Setup Dialog"
                hexpand
                vexpand
              />
              <Button
                onClicked={() => setShowPrintDialog(true)}
                label="Print Dialog"
                hexpand
                vexpand
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
              {showPrintDialog ? (
                <PrintUnixDialog
                  title="Print Unix Dialog"
                  hexpand
                  vexpand
                  onResponse={() => {
                    setShowPrintDialog(false)
                  }}
                  onCloseRequest={() => {
                    setShowPrintDialog(false)
                    return false
                  }}
                />
              ) : null}
            </Box>
            <Calendar
              hexpand
              vexpand
              markedDays={[1, 2, 3]}
              day={selectedDay}
              month={calendarMonth}
              year={calendarYear}
              onDaySelected={(calendar) => {
                setSelectedDay(calendar.day)
              }}
              onNotifyMonth={(calendar) => {
                setCalendarMonth(calendar.month)
              }}
              onNotifyYear={(calendar) => {
                setCalendarYear(calendar.year)
              }}
            />
            <SpinButton range={[0, 80]} adjustment={spinButtonAdjustment} />
            <TextView.Container buffer={textViewBuffer.value}>
              <TextView.Overlay x={150} y={0}>
                <Label label="Overlay 1" />
              </TextView.Overlay>
              <TextView.Anchor anchor={textViewBuffer.anchor}>
                <Label label="Anchor 1" />
              </TextView.Anchor>
            </TextView.Container>
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
            <MenuButton
              hexpand
              vexpand
              label="Menu Button"
              actionGroup={actionGroup}
              actionPrefix="menu"
              menuModel={menu}
            />
            <PopoverMenuBar.Container hexpand vexpand menuModel={menuBar} />
          </Box>
        </Grid.Item>
      </Grid.Container>
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
    </ApplicationWindow>
  )
}
