import Gtk from "@girs/node-gtk-4.0"
import PageSetupUnixDialog from "../../src/generated/widgets/PageSetupUnixDialog.js"
import "../../src/overrides/PageSetupUnixDialog.js"

describe("PageSetupUnixDialog overrides", () => {
  test("should present node on commitMount", () => {
    const activeWindow = new Gtk.Window()

    const dialog = new PageSetupUnixDialog(
      {},
      {
        application: Object.assign(Object.create(Gtk.Application.prototype), {
          getActiveWindow: jest.fn(() => activeWindow),
        }),
      }
    )

    dialog.commitMount()

    expect(dialog.node.setDestroyWithParent).toHaveBeenCalledWith(true)
    expect(dialog.node.setModal).toHaveBeenCalledWith(true)
    expect(dialog.node.present).toHaveBeenCalled()
    expect(dialog.node.setTransientFor).toHaveBeenCalledWith(activeWindow)
  })
})
