import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Entry<T extends Gtk.Entry = Gtk.Entry> extends Widget<T> {
  static createNode() {
    return new Gtk.Entry({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "activatesDefault":
        this.node.setActivatesDefault(newValue)
        break
      case "attributes":
        this.node.setAttributes(newValue)
        break
      case "buffer":
        this.node.setBuffer(newValue)
        break
      case "completion":
        this.node.setCompletion(newValue)
        break
      case "enableEmojiCompletion":
        this.node.enableEmojiCompletion = newValue
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "imModule":
        this.node.imModule = newValue
        break
      case "inputHints":
        this.node.setInputHints(newValue)
        break
      case "inputPurpose":
        this.node.setInputPurpose(newValue)
        break
      case "invisibleChar":
        this.node.setInvisibleChar(newValue)
        break
      case "invisibleCharSet":
        this.node.invisibleCharSet = newValue
        break
      case "maxLength":
        this.node.setMaxLength(newValue)
        break
      case "overwriteMode":
        this.node.setOverwriteMode(newValue)
        break
      case "placeholderText":
        this.node.setPlaceholderText(newValue)
        break
      case "primaryIconActivatable":
        this.node.primaryIconActivatable = newValue
        break
      case "primaryIconGicon":
        this.node.primaryIconGicon = newValue
        break
      case "primaryIconName":
        this.node.primaryIconName = newValue
        break
      case "primaryIconPaintable":
        this.node.primaryIconPaintable = newValue
        break
      case "primaryIconSensitive":
        this.node.primaryIconSensitive = newValue
        break
      case "primaryIconTooltipMarkup":
        this.node.primaryIconTooltipMarkup = newValue
        break
      case "primaryIconTooltipText":
        this.node.primaryIconTooltipText = newValue
        break
      case "progressFraction":
        this.node.setProgressFraction(newValue)
        break
      case "progressPulseStep":
        this.node.setProgressPulseStep(newValue)
        break
      case "secondaryIconActivatable":
        this.node.secondaryIconActivatable = newValue
        break
      case "secondaryIconGicon":
        this.node.secondaryIconGicon = newValue
        break
      case "secondaryIconName":
        this.node.secondaryIconName = newValue
        break
      case "secondaryIconPaintable":
        this.node.secondaryIconPaintable = newValue
        break
      case "secondaryIconSensitive":
        this.node.secondaryIconSensitive = newValue
        break
      case "secondaryIconTooltipMarkup":
        this.node.secondaryIconTooltipMarkup = newValue
        break
      case "secondaryIconTooltipText":
        this.node.secondaryIconTooltipText = newValue
        break
      case "showEmojiIcon":
        this.node.showEmojiIcon = newValue
        break
      case "tabs":
        this.node.setTabs(newValue)
        break
      case "truncateMultiline":
        this.node.truncateMultiline = newValue
        break
      case "visibility":
        this.node.setVisibility(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "editingCanceled":
        this.node.editingCanceled = newValue
        break
      case "editable":
        this.node.setEditable(newValue)
        break
      case "enableUndo":
        this.node.setEnableUndo(newValue)
        break
      case "maxWidthChars":
        this.node.setMaxWidthChars(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "widthChars":
        this.node.setWidthChars(newValue)
        break
      case "xalign":
        this.node.xalign = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onIconPress":
        this.setHandler("icon-press", newValue)
        break
      case "onIconRelease":
        this.setHandler("icon-release", newValue)
        break
      case "onEditingDone":
        this.setHandler("editing-done", newValue)
        break
      case "onRemoveWidget":
        this.setHandler("remove-widget", newValue)
        break
      case "onChanged":
        this.setHandler("changed", newValue)
        break
      case "onDeleteText":
        this.setHandler("delete-text", newValue)
        break
      case "onInsertText":
        this.setHandler("insert-text", newValue)
        break
      case "onNotifyActivatesDefault":
        this.setHandler("notify::activates-default", newValue)
        break
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue)
        break
      case "onNotifyBuffer":
        this.setHandler("notify::buffer", newValue)
        break
      case "onNotifyCompletion":
        this.setHandler("notify::completion", newValue)
        break
      case "onNotifyEnableEmojiCompletion":
        this.setHandler("notify::enable-emoji-completion", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extra-menu", newValue)
        break
      case "onNotifyHasFrame":
        this.setHandler("notify::has-frame", newValue)
        break
      case "onNotifyImModule":
        this.setHandler("notify::im-module", newValue)
        break
      case "onNotifyInputHints":
        this.setHandler("notify::input-hints", newValue)
        break
      case "onNotifyInputPurpose":
        this.setHandler("notify::input-purpose", newValue)
        break
      case "onNotifyInvisibleChar":
        this.setHandler("notify::invisible-char", newValue)
        break
      case "onNotifyInvisibleCharSet":
        this.setHandler("notify::invisible-char-set", newValue)
        break
      case "onNotifyMaxLength":
        this.setHandler("notify::max-length", newValue)
        break
      case "onNotifyOverwriteMode":
        this.setHandler("notify::overwrite-mode", newValue)
        break
      case "onNotifyPlaceholderText":
        this.setHandler("notify::placeholder-text", newValue)
        break
      case "onNotifyPrimaryIconActivatable":
        this.setHandler("notify::primary-icon-activatable", newValue)
        break
      case "onNotifyPrimaryIconGicon":
        this.setHandler("notify::primary-icon-gicon", newValue)
        break
      case "onNotifyPrimaryIconName":
        this.setHandler("notify::primary-icon-name", newValue)
        break
      case "onNotifyPrimaryIconPaintable":
        this.setHandler("notify::primary-icon-paintable", newValue)
        break
      case "onNotifyPrimaryIconSensitive":
        this.setHandler("notify::primary-icon-sensitive", newValue)
        break
      case "onNotifyPrimaryIconStorageType":
        this.setHandler("notify::primary-icon-storage-type", newValue)
        break
      case "onNotifyPrimaryIconTooltipMarkup":
        this.setHandler("notify::primary-icon-tooltip-markup", newValue)
        break
      case "onNotifyPrimaryIconTooltipText":
        this.setHandler("notify::primary-icon-tooltip-text", newValue)
        break
      case "onNotifyProgressFraction":
        this.setHandler("notify::progress-fraction", newValue)
        break
      case "onNotifyProgressPulseStep":
        this.setHandler("notify::progress-pulse-step", newValue)
        break
      case "onNotifyScrollOffset":
        this.setHandler("notify::scroll-offset", newValue)
        break
      case "onNotifySecondaryIconActivatable":
        this.setHandler("notify::secondary-icon-activatable", newValue)
        break
      case "onNotifySecondaryIconGicon":
        this.setHandler("notify::secondary-icon-gicon", newValue)
        break
      case "onNotifySecondaryIconName":
        this.setHandler("notify::secondary-icon-name", newValue)
        break
      case "onNotifySecondaryIconPaintable":
        this.setHandler("notify::secondary-icon-paintable", newValue)
        break
      case "onNotifySecondaryIconSensitive":
        this.setHandler("notify::secondary-icon-sensitive", newValue)
        break
      case "onNotifySecondaryIconStorageType":
        this.setHandler("notify::secondary-icon-storage-type", newValue)
        break
      case "onNotifySecondaryIconTooltipMarkup":
        this.setHandler("notify::secondary-icon-tooltip-markup", newValue)
        break
      case "onNotifySecondaryIconTooltipText":
        this.setHandler("notify::secondary-icon-tooltip-text", newValue)
        break
      case "onNotifyShowEmojiIcon":
        this.setHandler("notify::show-emoji-icon", newValue)
        break
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue)
        break
      case "onNotifyTextLength":
        this.setHandler("notify::text-length", newValue)
        break
      case "onNotifyTruncateMultiline":
        this.setHandler("notify::truncate-multiline", newValue)
        break
      case "onNotifyVisibility":
        this.setHandler("notify::visibility", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyEditingCanceled":
        this.setHandler("notify::editing-canceled", newValue)
        break
      case "onNotifyCursorPosition":
        this.setHandler("notify::cursor-position", newValue)
        break
      case "onNotifyEditable":
        this.setHandler("notify::editable", newValue)
        break
      case "onNotifyEnableUndo":
        this.setHandler("notify::enable-undo", newValue)
        break
      case "onNotifyMaxWidthChars":
        this.setHandler("notify::max-width-chars", newValue)
        break
      case "onNotifySelectionBound":
        this.setHandler("notify::selection-bound", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
        break
      case "onNotifyWidthChars":
        this.setHandler("notify::width-chars", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
