import React from "react"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import Gio from "@girs/node-gio-2.0"
import GLib from "@girs/node-glib-2.0"
import Pango from "@girs/node-pango-1.0"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      AboutDialog: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.AboutDialog>
        artists?: string[]
        authors?: string[]
        comments?: string
        copyright?: string
        documenters?: string[]
        license?: string
        licenseType?: Gtk.License
        logo?: Gdk.Paintable
        logoIconName?: string
        programName?: string
        systemInformation?: string
        translatorCredits?: string
        version?: string
        website?: string
        websiteLabel?: string
        wrapLicense?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivateLink?: (node: Gtk.AboutDialog, uri?: string) => boolean
        onNotifyArtists?: (node: Gtk.AboutDialog) => void
        onNotifyAuthors?: (node: Gtk.AboutDialog) => void
        onNotifyComments?: (node: Gtk.AboutDialog) => void
        onNotifyCopyright?: (node: Gtk.AboutDialog) => void
        onNotifyDocumenters?: (node: Gtk.AboutDialog) => void
        onNotifyLicense?: (node: Gtk.AboutDialog) => void
        onNotifyLicenseType?: (node: Gtk.AboutDialog) => void
        onNotifyLogo?: (node: Gtk.AboutDialog) => void
        onNotifyLogoIconName?: (node: Gtk.AboutDialog) => void
        onNotifyProgramName?: (node: Gtk.AboutDialog) => void
        onNotifySystemInformation?: (node: Gtk.AboutDialog) => void
        onNotifyTranslatorCredits?: (node: Gtk.AboutDialog) => void
        onNotifyVersion?: (node: Gtk.AboutDialog) => void
        onNotifyWebsite?: (node: Gtk.AboutDialog) => void
        onNotifyWebsiteLabel?: (node: Gtk.AboutDialog) => void
        onNotifyWrapLicense?: (node: Gtk.AboutDialog) => void
        onNotifyAccessibleRole?: (node: Gtk.AboutDialog) => void
      }
      ActionBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ActionBar>
        revealed?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyRevealed?: (node: Gtk.ActionBar) => void
        onNotifyAccessibleRole?: (node: Gtk.ActionBar) => void
      }
      AppChooserButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserButton>
        heading?: string
        modal?: boolean
        showDefaultItem?: boolean
        showDialogItem?: boolean
        accessibleRole?: Gtk.AccessibleRole
        contentType?: string
        onActivate?: (node: Gtk.AppChooserButton) => void
        onChanged?: (node: Gtk.AppChooserButton) => void
        onCustomItemActivated?: (
          node: Gtk.AppChooserButton,
          itemName?: string
        ) => void
        onNotifyHeading?: (node: Gtk.AppChooserButton) => void
        onNotifyModal?: (node: Gtk.AppChooserButton) => void
        onNotifyShowDefaultItem?: (node: Gtk.AppChooserButton) => void
        onNotifyShowDialogItem?: (node: Gtk.AppChooserButton) => void
        onNotifyAccessibleRole?: (node: Gtk.AppChooserButton) => void
        onNotifyContentType?: (node: Gtk.AppChooserButton) => void
      }
      AppChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.AppChooserDialog>
        gfile?: Gio.File
        heading?: string
        accessibleRole?: Gtk.AccessibleRole
        contentType?: string
        onNotifyGfile?: (node: Gtk.AppChooserDialog) => void
        onNotifyHeading?: (node: Gtk.AppChooserDialog) => void
        onNotifyAccessibleRole?: (node: Gtk.AppChooserDialog) => void
        onNotifyContentType?: (node: Gtk.AppChooserDialog) => void
      }
      AppChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserWidget>
        defaultText?: string
        showAll?: boolean
        showDefault?: boolean
        showFallback?: boolean
        showOther?: boolean
        showRecommended?: boolean
        accessibleRole?: Gtk.AccessibleRole
        contentType?: string
        onApplicationActivated?: (
          node: Gtk.AppChooserWidget,
          application?: Gio.AppInfo
        ) => void
        onApplicationSelected?: (
          node: Gtk.AppChooserWidget,
          application?: Gio.AppInfo
        ) => void
        onNotifyDefaultText?: (node: Gtk.AppChooserWidget) => void
        onNotifyShowAll?: (node: Gtk.AppChooserWidget) => void
        onNotifyShowDefault?: (node: Gtk.AppChooserWidget) => void
        onNotifyShowFallback?: (node: Gtk.AppChooserWidget) => void
        onNotifyShowOther?: (node: Gtk.AppChooserWidget) => void
        onNotifyShowRecommended?: (node: Gtk.AppChooserWidget) => void
        onNotifyAccessibleRole?: (node: Gtk.AppChooserWidget) => void
        onNotifyContentType?: (node: Gtk.AppChooserWidget) => void
      }
      ApplicationWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ApplicationWindow>
        showMenubar?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyShowMenubar?: (node: Gtk.ApplicationWindow) => void
        onNotifyAccessibleRole?: (node: Gtk.ApplicationWindow) => void
      }
      AspectFrame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AspectFrame>
        child?: Gtk.Widget
        obeyChild?: boolean
        ratio?: number
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChild?: (node: Gtk.AspectFrame) => void
        onNotifyObeyChild?: (node: Gtk.AspectFrame) => void
        onNotifyRatio?: (node: Gtk.AspectFrame) => void
        onNotifyXalign?: (node: Gtk.AspectFrame) => void
        onNotifyYalign?: (node: Gtk.AspectFrame) => void
        onNotifyAccessibleRole?: (node: Gtk.AspectFrame) => void
      }
      Assistant: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Assistant>
        useHeaderBar?: number
        accessibleRole?: Gtk.AccessibleRole
        onApply?: (node: Gtk.Assistant) => void
        onCancel?: (node: Gtk.Assistant) => void
        onClose?: (node: Gtk.Assistant) => void
        onEscape?: (node: Gtk.Assistant) => void
        onPrepare?: (node: Gtk.Assistant, page?: Gtk.Widget) => void
        onNotifyPages?: (node: Gtk.Assistant) => void
        onNotifyUseHeaderBar?: (node: Gtk.Assistant) => void
        onNotifyAccessibleRole?: (node: Gtk.Assistant) => void
      }
      Box: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Box>
        baselinePosition?: Gtk.BaselinePosition
        homogeneous?: boolean
        spacing?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyBaselinePosition?: (node: Gtk.Box) => void
        onNotifyHomogeneous?: (node: Gtk.Box) => void
        onNotifySpacing?: (node: Gtk.Box) => void
        onNotifyAccessibleRole?: (node: Gtk.Box) => void
        onNotifyOrientation?: (node: Gtk.Box) => void
      }
      Button: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Button>
        child?: Gtk.Widget
        hasFrame?: boolean
        iconName?: string
        label?: string
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.Button) => void
        onClicked?: (node: Gtk.Button) => void
        onNotifyChild?: (node: Gtk.Button) => void
        onNotifyHasFrame?: (node: Gtk.Button) => void
        onNotifyIconName?: (node: Gtk.Button) => void
        onNotifyLabel?: (node: Gtk.Button) => void
        onNotifyUseUnderline?: (node: Gtk.Button) => void
        onNotifyAccessibleRole?: (node: Gtk.Button) => void
        onNotifyActionName?: (node: Gtk.Button) => void
        onNotifyActionTarget?: (node: Gtk.Button) => void
      }
      Calendar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Calendar>
        day?: number
        month?: number
        showDayNames?: boolean
        showHeading?: boolean
        showWeekNumbers?: boolean
        year?: number
        accessibleRole?: Gtk.AccessibleRole
        onDaySelected?: (node: Gtk.Calendar) => void
        onNextMonth?: (node: Gtk.Calendar) => void
        onNextYear?: (node: Gtk.Calendar) => void
        onPrevMonth?: (node: Gtk.Calendar) => void
        onPrevYear?: (node: Gtk.Calendar) => void
        onNotifyDay?: (node: Gtk.Calendar) => void
        onNotifyMonth?: (node: Gtk.Calendar) => void
        onNotifyShowDayNames?: (node: Gtk.Calendar) => void
        onNotifyShowHeading?: (node: Gtk.Calendar) => void
        onNotifyShowWeekNumbers?: (node: Gtk.Calendar) => void
        onNotifyYear?: (node: Gtk.Calendar) => void
        onNotifyAccessibleRole?: (node: Gtk.Calendar) => void
      }
      CellView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CellView>
        cellArea?: Gtk.CellArea
        cellAreaContext?: Gtk.CellAreaContext
        drawSensitive?: boolean
        fitModel?: boolean
        model?: Gtk.TreeModel
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyCellArea?: (node: Gtk.CellView) => void
        onNotifyCellAreaContext?: (node: Gtk.CellView) => void
        onNotifyDrawSensitive?: (node: Gtk.CellView) => void
        onNotifyFitModel?: (node: Gtk.CellView) => void
        onNotifyModel?: (node: Gtk.CellView) => void
        onNotifyAccessibleRole?: (node: Gtk.CellView) => void
        onNotifyOrientation?: (node: Gtk.CellView) => void
      }
      CenterBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CenterBox>
        baselinePosition?: Gtk.BaselinePosition
        centerWidget?: Gtk.Widget
        endWidget?: Gtk.Widget
        startWidget?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyBaselinePosition?: (node: Gtk.CenterBox) => void
        onNotifyCenterWidget?: (node: Gtk.CenterBox) => void
        onNotifyEndWidget?: (node: Gtk.CenterBox) => void
        onNotifyStartWidget?: (node: Gtk.CenterBox) => void
        onNotifyAccessibleRole?: (node: Gtk.CenterBox) => void
        onNotifyOrientation?: (node: Gtk.CenterBox) => void
      }
      CheckButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CheckButton>
        active?: boolean
        child?: Gtk.Widget
        group?: Gtk.CheckButton
        inconsistent?: boolean
        label?: string
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.CheckButton) => void
        onToggled?: (node: Gtk.CheckButton) => void
        onNotifyActive?: (node: Gtk.CheckButton) => void
        onNotifyChild?: (node: Gtk.CheckButton) => void
        onNotifyGroup?: (node: Gtk.CheckButton) => void
        onNotifyInconsistent?: (node: Gtk.CheckButton) => void
        onNotifyLabel?: (node: Gtk.CheckButton) => void
        onNotifyUseUnderline?: (node: Gtk.CheckButton) => void
        onNotifyAccessibleRole?: (node: Gtk.CheckButton) => void
        onNotifyActionName?: (node: Gtk.CheckButton) => void
        onNotifyActionTarget?: (node: Gtk.CheckButton) => void
      }
      ColorButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorButton>
        modal?: boolean
        showEditor?: boolean
        title?: string
        accessibleRole?: Gtk.AccessibleRole
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onActivate?: (node: Gtk.ColorButton) => void
        onColorSet?: (node: Gtk.ColorButton) => void
        onColorActivated?: (node: Gtk.ColorButton, color?: Gdk.RGBA) => void
        onNotifyModal?: (node: Gtk.ColorButton) => void
        onNotifyShowEditor?: (node: Gtk.ColorButton) => void
        onNotifyTitle?: (node: Gtk.ColorButton) => void
        onNotifyAccessibleRole?: (node: Gtk.ColorButton) => void
        onNotifyRgba?: (node: Gtk.ColorButton) => void
        onNotifyUseAlpha?: (node: Gtk.ColorButton) => void
      }
      ColorChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.ColorChooserDialog>
        showEditor?: boolean
        accessibleRole?: Gtk.AccessibleRole
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: (
          node: Gtk.ColorChooserDialog,
          color?: Gdk.RGBA
        ) => void
        onNotifyShowEditor?: (node: Gtk.ColorChooserDialog) => void
        onNotifyAccessibleRole?: (node: Gtk.ColorChooserDialog) => void
        onNotifyRgba?: (node: Gtk.ColorChooserDialog) => void
        onNotifyUseAlpha?: (node: Gtk.ColorChooserDialog) => void
      }
      ColorChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorChooserWidget>
        showEditor?: boolean
        accessibleRole?: Gtk.AccessibleRole
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: (
          node: Gtk.ColorChooserWidget,
          color?: Gdk.RGBA
        ) => void
        onNotifyShowEditor?: (node: Gtk.ColorChooserWidget) => void
        onNotifyAccessibleRole?: (node: Gtk.ColorChooserWidget) => void
        onNotifyRgba?: (node: Gtk.ColorChooserWidget) => void
        onNotifyUseAlpha?: (node: Gtk.ColorChooserWidget) => void
      }
      ColorDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorDialogButton>
        dialog?: Gtk.ColorDialog
        rgba?: Gdk.RGBA
        accessibleRole?: Gtk.AccessibleRole
        onNotifyDialog?: (node: Gtk.ColorDialogButton) => void
        onNotifyRgba?: (node: Gtk.ColorDialogButton) => void
        onNotifyAccessibleRole?: (node: Gtk.ColorDialogButton) => void
      }
      ColumnView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColumnView>
        enableRubberband?: boolean
        model?: Gtk.SelectionModel
        reorderable?: boolean
        showColumnSeparators?: boolean
        showRowSeparators?: boolean
        singleClickActivate?: boolean
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (node: Gtk.ColumnView, position?: number) => void
        onNotifyColumns?: (node: Gtk.ColumnView) => void
        onNotifyEnableRubberband?: (node: Gtk.ColumnView) => void
        onNotifyModel?: (node: Gtk.ColumnView) => void
        onNotifyReorderable?: (node: Gtk.ColumnView) => void
        onNotifyShowColumnSeparators?: (node: Gtk.ColumnView) => void
        onNotifyShowRowSeparators?: (node: Gtk.ColumnView) => void
        onNotifySingleClickActivate?: (node: Gtk.ColumnView) => void
        onNotifySorter?: (node: Gtk.ColumnView) => void
        onNotifyAccessibleRole?: (node: Gtk.ColumnView) => void
        onNotifyHadjustment?: (node: Gtk.ColumnView) => void
        onNotifyHscrollPolicy?: (node: Gtk.ColumnView) => void
        onNotifyVadjustment?: (node: Gtk.ColumnView) => void
        onNotifyVscrollPolicy?: (node: Gtk.ColumnView) => void
      }
      ComboBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ComboBox>
        active?: number
        activeId?: string
        buttonSensitivity?: Gtk.SensitivityType
        child?: Gtk.Widget
        entryTextColumn?: number
        hasEntry?: boolean
        hasFrame?: boolean
        idColumn?: number
        model?: Gtk.TreeModel
        popupFixedWidth?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        onActivate?: (node: Gtk.ComboBox) => void
        onChanged?: (node: Gtk.ComboBox) => void
        onFormatEntryText?: (node: Gtk.ComboBox, path?: string) => string
        onMoveActive?: (node: Gtk.ComboBox, scrollType?: Gtk.ScrollType) => void
        onPopdown?: (node: Gtk.ComboBox) => boolean
        onPopup?: (node: Gtk.ComboBox) => void
        onEditingDone?: (node: Gtk.ComboBox) => void
        onRemoveWidget?: (node: Gtk.ComboBox) => void
        onNotifyActive?: (node: Gtk.ComboBox) => void
        onNotifyActiveId?: (node: Gtk.ComboBox) => void
        onNotifyButtonSensitivity?: (node: Gtk.ComboBox) => void
        onNotifyChild?: (node: Gtk.ComboBox) => void
        onNotifyEntryTextColumn?: (node: Gtk.ComboBox) => void
        onNotifyHasEntry?: (node: Gtk.ComboBox) => void
        onNotifyHasFrame?: (node: Gtk.ComboBox) => void
        onNotifyIdColumn?: (node: Gtk.ComboBox) => void
        onNotifyModel?: (node: Gtk.ComboBox) => void
        onNotifyPopupFixedWidth?: (node: Gtk.ComboBox) => void
        onNotifyPopupShown?: (node: Gtk.ComboBox) => void
        onNotifyAccessibleRole?: (node: Gtk.ComboBox) => void
        onNotifyEditingCanceled?: (node: Gtk.ComboBox) => void
      }
      ComboBoxText: JSX.IntrinsicElements["ComboBox"] & {
        ref?: React.Ref<Gtk.ComboBoxText>
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        onEditingDone?: (node: Gtk.ComboBoxText) => void
        onRemoveWidget?: (node: Gtk.ComboBoxText) => void
        onNotifyAccessibleRole?: (node: Gtk.ComboBoxText) => void
        onNotifyEditingCanceled?: (node: Gtk.ComboBoxText) => void
      }
      Dialog: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Dialog>
        useHeaderBar?: number
        accessibleRole?: Gtk.AccessibleRole
        onClose?: (node: Gtk.Dialog) => void
        onResponse?: (node: Gtk.Dialog, responseId?: number) => void
        onNotifyUseHeaderBar?: (node: Gtk.Dialog) => void
        onNotifyAccessibleRole?: (node: Gtk.Dialog) => void
      }
      DragIcon: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DragIcon>
        child?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChild?: (node: Gtk.DragIcon) => void
        onNotifyAccessibleRole?: (node: Gtk.DragIcon) => void
      }
      DrawingArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DrawingArea>
        contentHeight?: number
        contentWidth?: number
        accessibleRole?: Gtk.AccessibleRole
        onResize?: (
          node: Gtk.DrawingArea,
          width?: number,
          height?: number
        ) => void
        onNotifyContentHeight?: (node: Gtk.DrawingArea) => void
        onNotifyContentWidth?: (node: Gtk.DrawingArea) => void
        onNotifyAccessibleRole?: (node: Gtk.DrawingArea) => void
      }
      DropDown: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DropDown>
        enableSearch?: boolean
        expression?: Gtk.Expression
        factory?: Gtk.ListItemFactory
        listFactory?: Gtk.ListItemFactory
        model?: Gio.ListModel
        selected?: number
        showArrow?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.DropDown) => void
        onNotifyEnableSearch?: (node: Gtk.DropDown) => void
        onNotifyExpression?: (node: Gtk.DropDown) => void
        onNotifyFactory?: (node: Gtk.DropDown) => void
        onNotifyListFactory?: (node: Gtk.DropDown) => void
        onNotifyModel?: (node: Gtk.DropDown) => void
        onNotifySelected?: (node: Gtk.DropDown) => void
        onNotifySelectedItem?: (node: Gtk.DropDown) => void
        onNotifyShowArrow?: (node: Gtk.DropDown) => void
        onNotifyAccessibleRole?: (node: Gtk.DropDown) => void
      }
      EditableLabel: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.EditableLabel>
        editing?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        xalign?: number
        onChanged?: (node: Gtk.EditableLabel) => void
        onDeleteText?: (
          node: Gtk.EditableLabel,
          startPos?: number,
          endPos?: number
        ) => void
        onInsertText?: (
          node: Gtk.EditableLabel,
          text?: string,
          length?: number,
          position?: number
        ) => void
        onNotifyEditing?: (node: Gtk.EditableLabel) => void
        onNotifyAccessibleRole?: (node: Gtk.EditableLabel) => void
        onNotifyCursorPosition?: (node: Gtk.EditableLabel) => void
        onNotifyEditable?: (node: Gtk.EditableLabel) => void
        onNotifyEnableUndo?: (node: Gtk.EditableLabel) => void
        onNotifyMaxWidthChars?: (node: Gtk.EditableLabel) => void
        onNotifySelectionBound?: (node: Gtk.EditableLabel) => void
        onNotifyText?: (node: Gtk.EditableLabel) => void
        onNotifyWidthChars?: (node: Gtk.EditableLabel) => void
        onNotifyXalign?: (node: Gtk.EditableLabel) => void
      }
      EmojiChooser: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.EmojiChooser>
        accessibleRole?: Gtk.AccessibleRole
        onEmojiPicked?: (node: Gtk.EmojiChooser, text?: string) => void
        onNotifyAccessibleRole?: (node: Gtk.EmojiChooser) => void
      }
      Entry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Entry>
        activatesDefault?: boolean
        attributes?: Pango.AttrList
        buffer?: Gtk.EntryBuffer
        completion?: Gtk.EntryCompletion
        enableEmojiCompletion?: boolean
        extraMenu?: Gio.MenuModel
        hasFrame?: boolean
        imModule?: string
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        invisibleChar?: number
        invisibleCharSet?: boolean
        maxLength?: number
        overwriteMode?: boolean
        placeholderText?: string
        primaryIconActivatable?: boolean
        primaryIconGicon?: Gio.Icon
        primaryIconName?: string
        primaryIconPaintable?: Gdk.Paintable
        primaryIconSensitive?: boolean
        primaryIconTooltipMarkup?: string
        primaryIconTooltipText?: string
        progressFraction?: number
        progressPulseStep?: number
        secondaryIconActivatable?: boolean
        secondaryIconGicon?: Gio.Icon
        secondaryIconName?: string
        secondaryIconPaintable?: Gdk.Paintable
        secondaryIconSensitive?: boolean
        secondaryIconTooltipMarkup?: string
        secondaryIconTooltipText?: string
        showEmojiIcon?: boolean
        tabs?: Pango.TabArray
        truncateMultiline?: boolean
        visibility?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: (node: Gtk.Entry) => void
        onIconPress?: (node: Gtk.Entry, iconPos?: Gtk.EntryIconPosition) => void
        onIconRelease?: (
          node: Gtk.Entry,
          iconPos?: Gtk.EntryIconPosition
        ) => void
        onEditingDone?: (node: Gtk.Entry) => void
        onRemoveWidget?: (node: Gtk.Entry) => void
        onChanged?: (node: Gtk.Entry) => void
        onDeleteText?: (
          node: Gtk.Entry,
          startPos?: number,
          endPos?: number
        ) => void
        onInsertText?: (
          node: Gtk.Entry,
          text?: string,
          length?: number,
          position?: number
        ) => void
        onNotifyActivatesDefault?: (node: Gtk.Entry) => void
        onNotifyAttributes?: (node: Gtk.Entry) => void
        onNotifyBuffer?: (node: Gtk.Entry) => void
        onNotifyCompletion?: (node: Gtk.Entry) => void
        onNotifyEnableEmojiCompletion?: (node: Gtk.Entry) => void
        onNotifyExtraMenu?: (node: Gtk.Entry) => void
        onNotifyHasFrame?: (node: Gtk.Entry) => void
        onNotifyImModule?: (node: Gtk.Entry) => void
        onNotifyInputHints?: (node: Gtk.Entry) => void
        onNotifyInputPurpose?: (node: Gtk.Entry) => void
        onNotifyInvisibleChar?: (node: Gtk.Entry) => void
        onNotifyInvisibleCharSet?: (node: Gtk.Entry) => void
        onNotifyMaxLength?: (node: Gtk.Entry) => void
        onNotifyOverwriteMode?: (node: Gtk.Entry) => void
        onNotifyPlaceholderText?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconActivatable?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconGicon?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconName?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconPaintable?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconSensitive?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconStorageType?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconTooltipMarkup?: (node: Gtk.Entry) => void
        onNotifyPrimaryIconTooltipText?: (node: Gtk.Entry) => void
        onNotifyProgressFraction?: (node: Gtk.Entry) => void
        onNotifyProgressPulseStep?: (node: Gtk.Entry) => void
        onNotifyScrollOffset?: (node: Gtk.Entry) => void
        onNotifySecondaryIconActivatable?: (node: Gtk.Entry) => void
        onNotifySecondaryIconGicon?: (node: Gtk.Entry) => void
        onNotifySecondaryIconName?: (node: Gtk.Entry) => void
        onNotifySecondaryIconPaintable?: (node: Gtk.Entry) => void
        onNotifySecondaryIconSensitive?: (node: Gtk.Entry) => void
        onNotifySecondaryIconStorageType?: (node: Gtk.Entry) => void
        onNotifySecondaryIconTooltipMarkup?: (node: Gtk.Entry) => void
        onNotifySecondaryIconTooltipText?: (node: Gtk.Entry) => void
        onNotifyShowEmojiIcon?: (node: Gtk.Entry) => void
        onNotifyTabs?: (node: Gtk.Entry) => void
        onNotifyTextLength?: (node: Gtk.Entry) => void
        onNotifyTruncateMultiline?: (node: Gtk.Entry) => void
        onNotifyVisibility?: (node: Gtk.Entry) => void
        onNotifyAccessibleRole?: (node: Gtk.Entry) => void
        onNotifyEditingCanceled?: (node: Gtk.Entry) => void
        onNotifyCursorPosition?: (node: Gtk.Entry) => void
        onNotifyEditable?: (node: Gtk.Entry) => void
        onNotifyEnableUndo?: (node: Gtk.Entry) => void
        onNotifyMaxWidthChars?: (node: Gtk.Entry) => void
        onNotifySelectionBound?: (node: Gtk.Entry) => void
        onNotifyText?: (node: Gtk.Entry) => void
        onNotifyWidthChars?: (node: Gtk.Entry) => void
        onNotifyXalign?: (node: Gtk.Entry) => void
      }
      Expander: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Expander>
        child?: Gtk.Widget
        expanded?: boolean
        label?: string
        labelWidget?: Gtk.Widget
        resizeToplevel?: boolean
        useMarkup?: boolean
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.Expander) => void
        onNotifyChild?: (node: Gtk.Expander) => void
        onNotifyExpanded?: (node: Gtk.Expander) => void
        onNotifyLabel?: (node: Gtk.Expander) => void
        onNotifyLabelWidget?: (node: Gtk.Expander) => void
        onNotifyResizeToplevel?: (node: Gtk.Expander) => void
        onNotifyUseMarkup?: (node: Gtk.Expander) => void
        onNotifyUseUnderline?: (node: Gtk.Expander) => void
        onNotifyAccessibleRole?: (node: Gtk.Expander) => void
      }
      FileChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FileChooserDialog>
        accessibleRole?: Gtk.AccessibleRole
        action?: Gtk.FileChooserAction
        createFolders?: boolean
        filter?: Gtk.FileFilter
        selectMultiple?: boolean
        onNotifyAccessibleRole?: (node: Gtk.FileChooserDialog) => void
        onNotifyAction?: (node: Gtk.FileChooserDialog) => void
        onNotifyCreateFolders?: (node: Gtk.FileChooserDialog) => void
        onNotifyFilter?: (node: Gtk.FileChooserDialog) => void
        onNotifyFilters?: (node: Gtk.FileChooserDialog) => void
        onNotifySelectMultiple?: (node: Gtk.FileChooserDialog) => void
        onNotifyShortcutFolders?: (node: Gtk.FileChooserDialog) => void
      }
      FileChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FileChooserWidget>
        searchMode?: boolean
        accessibleRole?: Gtk.AccessibleRole
        action?: Gtk.FileChooserAction
        createFolders?: boolean
        filter?: Gtk.FileFilter
        selectMultiple?: boolean
        onDesktopFolder?: (node: Gtk.FileChooserWidget) => void
        onDownFolder?: (node: Gtk.FileChooserWidget) => void
        onHomeFolder?: (node: Gtk.FileChooserWidget) => void
        onLocationPopup?: (node: Gtk.FileChooserWidget, path?: string) => void
        onLocationPopupOnPaste?: (node: Gtk.FileChooserWidget) => void
        onLocationTogglePopup?: (node: Gtk.FileChooserWidget) => void
        onPlacesShortcut?: (node: Gtk.FileChooserWidget) => void
        onQuickBookmark?: (
          node: Gtk.FileChooserWidget,
          bookmarkIndex?: number
        ) => void
        onRecentShortcut?: (node: Gtk.FileChooserWidget) => void
        onSearchShortcut?: (node: Gtk.FileChooserWidget) => void
        onShowHidden?: (node: Gtk.FileChooserWidget) => void
        onUpFolder?: (node: Gtk.FileChooserWidget) => void
        onNotifySearchMode?: (node: Gtk.FileChooserWidget) => void
        onNotifyShowTime?: (node: Gtk.FileChooserWidget) => void
        onNotifySubtitle?: (node: Gtk.FileChooserWidget) => void
        onNotifyAccessibleRole?: (node: Gtk.FileChooserWidget) => void
        onNotifyAction?: (node: Gtk.FileChooserWidget) => void
        onNotifyCreateFolders?: (node: Gtk.FileChooserWidget) => void
        onNotifyFilter?: (node: Gtk.FileChooserWidget) => void
        onNotifyFilters?: (node: Gtk.FileChooserWidget) => void
        onNotifySelectMultiple?: (node: Gtk.FileChooserWidget) => void
        onNotifyShortcutFolders?: (node: Gtk.FileChooserWidget) => void
      }
      Fixed: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Fixed>
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccessibleRole?: (node: Gtk.Fixed) => void
      }
      FlowBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBox>
        acceptUnpairedRelease?: boolean
        activateOnSingleClick?: boolean
        columnSpacing?: number
        homogeneous?: boolean
        maxChildrenPerLine?: number
        minChildrenPerLine?: number
        rowSpacing?: number
        selectionMode?: Gtk.SelectionMode
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onActivateCursorChild?: (node: Gtk.FlowBox) => void
        onChildActivated?: (node: Gtk.FlowBox, child?: Gtk.FlowBoxChild) => void
        onMoveCursor?: (
          node: Gtk.FlowBox,
          step?: Gtk.MovementStep,
          count?: number,
          extend?: boolean,
          modify?: boolean
        ) => boolean
        onSelectAll?: (node: Gtk.FlowBox) => void
        onSelectedChildrenChanged?: (node: Gtk.FlowBox) => void
        onToggleCursorChild?: (node: Gtk.FlowBox) => void
        onUnselectAll?: (node: Gtk.FlowBox) => void
        onNotifyAcceptUnpairedRelease?: (node: Gtk.FlowBox) => void
        onNotifyActivateOnSingleClick?: (node: Gtk.FlowBox) => void
        onNotifyColumnSpacing?: (node: Gtk.FlowBox) => void
        onNotifyHomogeneous?: (node: Gtk.FlowBox) => void
        onNotifyMaxChildrenPerLine?: (node: Gtk.FlowBox) => void
        onNotifyMinChildrenPerLine?: (node: Gtk.FlowBox) => void
        onNotifyRowSpacing?: (node: Gtk.FlowBox) => void
        onNotifySelectionMode?: (node: Gtk.FlowBox) => void
        onNotifyAccessibleRole?: (node: Gtk.FlowBox) => void
        onNotifyOrientation?: (node: Gtk.FlowBox) => void
      }
      FlowBoxChild: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBoxChild>
        child?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.FlowBoxChild) => void
        onNotifyChild?: (node: Gtk.FlowBoxChild) => void
        onNotifyAccessibleRole?: (node: Gtk.FlowBoxChild) => void
      }
      FontButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontButton>
        modal?: boolean
        title?: string
        useFont?: boolean
        useSize?: boolean
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc?: Pango.FontDescription
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onActivate?: (node: Gtk.FontButton) => void
        onFontSet?: (node: Gtk.FontButton) => void
        onFontActivated?: (node: Gtk.FontButton, fontname?: string) => void
        onNotifyModal?: (node: Gtk.FontButton) => void
        onNotifyTitle?: (node: Gtk.FontButton) => void
        onNotifyUseFont?: (node: Gtk.FontButton) => void
        onNotifyUseSize?: (node: Gtk.FontButton) => void
        onNotifyAccessibleRole?: (node: Gtk.FontButton) => void
        onNotifyFont?: (node: Gtk.FontButton) => void
        onNotifyFontDesc?: (node: Gtk.FontButton) => void
        onNotifyFontFeatures?: (node: Gtk.FontButton) => void
        onNotifyLanguage?: (node: Gtk.FontButton) => void
        onNotifyLevel?: (node: Gtk.FontButton) => void
        onNotifyPreviewText?: (node: Gtk.FontButton) => void
        onNotifyShowPreviewEntry?: (node: Gtk.FontButton) => void
      }
      FontChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FontChooserDialog>
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc?: Pango.FontDescription
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: (
          node: Gtk.FontChooserDialog,
          fontname?: string
        ) => void
        onNotifyAccessibleRole?: (node: Gtk.FontChooserDialog) => void
        onNotifyFont?: (node: Gtk.FontChooserDialog) => void
        onNotifyFontDesc?: (node: Gtk.FontChooserDialog) => void
        onNotifyFontFeatures?: (node: Gtk.FontChooserDialog) => void
        onNotifyLanguage?: (node: Gtk.FontChooserDialog) => void
        onNotifyLevel?: (node: Gtk.FontChooserDialog) => void
        onNotifyPreviewText?: (node: Gtk.FontChooserDialog) => void
        onNotifyShowPreviewEntry?: (node: Gtk.FontChooserDialog) => void
      }
      FontChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontChooserWidget>
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc?: Pango.FontDescription
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: (
          node: Gtk.FontChooserWidget,
          fontname?: string
        ) => void
        onNotifyTweakAction?: (node: Gtk.FontChooserWidget) => void
        onNotifyAccessibleRole?: (node: Gtk.FontChooserWidget) => void
        onNotifyFont?: (node: Gtk.FontChooserWidget) => void
        onNotifyFontDesc?: (node: Gtk.FontChooserWidget) => void
        onNotifyFontFeatures?: (node: Gtk.FontChooserWidget) => void
        onNotifyLanguage?: (node: Gtk.FontChooserWidget) => void
        onNotifyLevel?: (node: Gtk.FontChooserWidget) => void
        onNotifyPreviewText?: (node: Gtk.FontChooserWidget) => void
        onNotifyShowPreviewEntry?: (node: Gtk.FontChooserWidget) => void
      }
      FontDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontDialogButton>
        dialog?: Gtk.FontDialog
        fontDesc?: Pango.FontDescription
        fontFeatures?: string
        language?: Pango.Language
        level?: Gtk.FontLevel
        useFont?: boolean
        useSize?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyDialog?: (node: Gtk.FontDialogButton) => void
        onNotifyFontDesc?: (node: Gtk.FontDialogButton) => void
        onNotifyFontFeatures?: (node: Gtk.FontDialogButton) => void
        onNotifyLanguage?: (node: Gtk.FontDialogButton) => void
        onNotifyLevel?: (node: Gtk.FontDialogButton) => void
        onNotifyUseFont?: (node: Gtk.FontDialogButton) => void
        onNotifyUseSize?: (node: Gtk.FontDialogButton) => void
        onNotifyAccessibleRole?: (node: Gtk.FontDialogButton) => void
      }
      Frame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Frame>
        child?: Gtk.Widget
        label?: string
        labelWidget?: Gtk.Widget
        labelXalign?: number
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChild?: (node: Gtk.Frame) => void
        onNotifyLabel?: (node: Gtk.Frame) => void
        onNotifyLabelWidget?: (node: Gtk.Frame) => void
        onNotifyLabelXalign?: (node: Gtk.Frame) => void
        onNotifyAccessibleRole?: (node: Gtk.Frame) => void
      }
      GLArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.GLArea>
        autoRender?: boolean
        hasDepthBuffer?: boolean
        hasStencilBuffer?: boolean
        useEs?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onCreateContext?: (node: Gtk.GLArea) => Gdk.GLContext
        onRender?: (node: Gtk.GLArea, context?: Gdk.GLContext) => boolean
        onResize?: (node: Gtk.GLArea, width?: number, height?: number) => void
        onNotifyAutoRender?: (node: Gtk.GLArea) => void
        onNotifyContext?: (node: Gtk.GLArea) => void
        onNotifyHasDepthBuffer?: (node: Gtk.GLArea) => void
        onNotifyHasStencilBuffer?: (node: Gtk.GLArea) => void
        onNotifyUseEs?: (node: Gtk.GLArea) => void
        onNotifyAccessibleRole?: (node: Gtk.GLArea) => void
      }
      Grid: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Grid>
        baselineRow?: number
        columnHomogeneous?: boolean
        columnSpacing?: number
        rowHomogeneous?: boolean
        rowSpacing?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyBaselineRow?: (node: Gtk.Grid) => void
        onNotifyColumnHomogeneous?: (node: Gtk.Grid) => void
        onNotifyColumnSpacing?: (node: Gtk.Grid) => void
        onNotifyRowHomogeneous?: (node: Gtk.Grid) => void
        onNotifyRowSpacing?: (node: Gtk.Grid) => void
        onNotifyAccessibleRole?: (node: Gtk.Grid) => void
        onNotifyOrientation?: (node: Gtk.Grid) => void
      }
      GridView: JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.GridView>
        enableRubberband?: boolean
        factory?: Gtk.ListItemFactory
        maxColumns?: number
        minColumns?: number
        model?: Gtk.SelectionModel
        singleClickActivate?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (node: Gtk.GridView, position?: number) => void
        onNotifyEnableRubberband?: (node: Gtk.GridView) => void
        onNotifyFactory?: (node: Gtk.GridView) => void
        onNotifyMaxColumns?: (node: Gtk.GridView) => void
        onNotifyMinColumns?: (node: Gtk.GridView) => void
        onNotifyModel?: (node: Gtk.GridView) => void
        onNotifySingleClickActivate?: (node: Gtk.GridView) => void
        onNotifyAccessibleRole?: (node: Gtk.GridView) => void
        onNotifyOrientation?: (node: Gtk.GridView) => void
        onNotifyHadjustment?: (node: Gtk.GridView) => void
        onNotifyHscrollPolicy?: (node: Gtk.GridView) => void
        onNotifyVadjustment?: (node: Gtk.GridView) => void
        onNotifyVscrollPolicy?: (node: Gtk.GridView) => void
      }
      HeaderBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.HeaderBar>
        decorationLayout?: string
        showTitleButtons?: boolean
        titleWidget?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        onNotifyDecorationLayout?: (node: Gtk.HeaderBar) => void
        onNotifyShowTitleButtons?: (node: Gtk.HeaderBar) => void
        onNotifyTitleWidget?: (node: Gtk.HeaderBar) => void
        onNotifyAccessibleRole?: (node: Gtk.HeaderBar) => void
      }
      IconView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.IconView>
        activateOnSingleClick?: boolean
        cellArea?: Gtk.CellArea
        columnSpacing?: number
        columns?: number
        itemOrientation?: Gtk.Orientation
        itemPadding?: number
        itemWidth?: number
        margin?: number
        markupColumn?: number
        model?: Gtk.TreeModel
        pixbufColumn?: number
        reorderable?: boolean
        rowSpacing?: number
        selectionMode?: Gtk.SelectionMode
        spacing?: number
        textColumn?: number
        tooltipColumn?: number
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivateCursorItem?: (node: Gtk.IconView) => boolean
        onItemActivated?: (node: Gtk.IconView, path?: Gtk.TreePath) => void
        onMoveCursor?: (
          node: Gtk.IconView,
          step?: Gtk.MovementStep,
          count?: number,
          extend?: boolean,
          modify?: boolean
        ) => boolean
        onSelectAll?: (node: Gtk.IconView) => void
        onSelectCursorItem?: (node: Gtk.IconView) => void
        onSelectionChanged?: (node: Gtk.IconView) => void
        onToggleCursorItem?: (node: Gtk.IconView) => void
        onUnselectAll?: (node: Gtk.IconView) => void
        onNotifyActivateOnSingleClick?: (node: Gtk.IconView) => void
        onNotifyCellArea?: (node: Gtk.IconView) => void
        onNotifyColumnSpacing?: (node: Gtk.IconView) => void
        onNotifyColumns?: (node: Gtk.IconView) => void
        onNotifyItemOrientation?: (node: Gtk.IconView) => void
        onNotifyItemPadding?: (node: Gtk.IconView) => void
        onNotifyItemWidth?: (node: Gtk.IconView) => void
        onNotifyMargin?: (node: Gtk.IconView) => void
        onNotifyMarkupColumn?: (node: Gtk.IconView) => void
        onNotifyModel?: (node: Gtk.IconView) => void
        onNotifyPixbufColumn?: (node: Gtk.IconView) => void
        onNotifyReorderable?: (node: Gtk.IconView) => void
        onNotifyRowSpacing?: (node: Gtk.IconView) => void
        onNotifySelectionMode?: (node: Gtk.IconView) => void
        onNotifySpacing?: (node: Gtk.IconView) => void
        onNotifyTextColumn?: (node: Gtk.IconView) => void
        onNotifyTooltipColumn?: (node: Gtk.IconView) => void
        onNotifyAccessibleRole?: (node: Gtk.IconView) => void
        onNotifyHadjustment?: (node: Gtk.IconView) => void
        onNotifyHscrollPolicy?: (node: Gtk.IconView) => void
        onNotifyVadjustment?: (node: Gtk.IconView) => void
        onNotifyVscrollPolicy?: (node: Gtk.IconView) => void
      }
      Image: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Image>
        file?: string
        gicon?: Gio.Icon
        iconName?: string
        iconSize?: Gtk.IconSize
        paintable?: Gdk.Paintable
        pixelSize?: number
        resource?: string
        useFallback?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyFile?: (node: Gtk.Image) => void
        onNotifyGicon?: (node: Gtk.Image) => void
        onNotifyIconName?: (node: Gtk.Image) => void
        onNotifyIconSize?: (node: Gtk.Image) => void
        onNotifyPaintable?: (node: Gtk.Image) => void
        onNotifyPixelSize?: (node: Gtk.Image) => void
        onNotifyResource?: (node: Gtk.Image) => void
        onNotifyStorageType?: (node: Gtk.Image) => void
        onNotifyUseFallback?: (node: Gtk.Image) => void
        onNotifyAccessibleRole?: (node: Gtk.Image) => void
      }
      InfoBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.InfoBar>
        messageType?: Gtk.MessageType
        revealed?: boolean
        showCloseButton?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onClose?: (node: Gtk.InfoBar) => void
        onResponse?: (node: Gtk.InfoBar, responseId?: number) => void
        onNotifyMessageType?: (node: Gtk.InfoBar) => void
        onNotifyRevealed?: (node: Gtk.InfoBar) => void
        onNotifyShowCloseButton?: (node: Gtk.InfoBar) => void
        onNotifyAccessibleRole?: (node: Gtk.InfoBar) => void
      }
      Inscription: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Inscription>
        attributes?: Pango.AttrList
        markup?: string
        minChars?: number
        minLines?: number
        natChars?: number
        natLines?: number
        text?: string
        textOverflow?: Gtk.InscriptionOverflow
        wrapMode?: Pango.WrapMode
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAttributes?: (node: Gtk.Inscription) => void
        onNotifyMarkup?: (node: Gtk.Inscription) => void
        onNotifyMinChars?: (node: Gtk.Inscription) => void
        onNotifyMinLines?: (node: Gtk.Inscription) => void
        onNotifyNatChars?: (node: Gtk.Inscription) => void
        onNotifyNatLines?: (node: Gtk.Inscription) => void
        onNotifyText?: (node: Gtk.Inscription) => void
        onNotifyTextOverflow?: (node: Gtk.Inscription) => void
        onNotifyWrapMode?: (node: Gtk.Inscription) => void
        onNotifyXalign?: (node: Gtk.Inscription) => void
        onNotifyYalign?: (node: Gtk.Inscription) => void
        onNotifyAccessibleRole?: (node: Gtk.Inscription) => void
      }
      Label: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Label>
        attributes?: Pango.AttrList
        ellipsize?: Pango.EllipsizeMode
        extraMenu?: Gio.MenuModel
        justify?: Gtk.Justification
        label?: string
        lines?: number
        maxWidthChars?: number
        mnemonicWidget?: Gtk.Widget
        naturalWrapMode?: Gtk.NaturalWrapMode
        selectable?: boolean
        singleLineMode?: boolean
        tabs?: Pango.TabArray
        useMarkup?: boolean
        useUnderline?: boolean
        widthChars?: number
        wrap?: boolean
        wrapMode?: Pango.WrapMode
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
        onActivateCurrentLink?: (node: Gtk.Label) => void
        onActivateLink?: (node: Gtk.Label, uri?: string) => boolean
        onCopyClipboard?: (node: Gtk.Label) => void
        onMoveCursor?: (
          node: Gtk.Label,
          step?: Gtk.MovementStep,
          count?: number,
          extendSelection?: boolean
        ) => void
        onNotifyAttributes?: (node: Gtk.Label) => void
        onNotifyEllipsize?: (node: Gtk.Label) => void
        onNotifyExtraMenu?: (node: Gtk.Label) => void
        onNotifyJustify?: (node: Gtk.Label) => void
        onNotifyLabel?: (node: Gtk.Label) => void
        onNotifyLines?: (node: Gtk.Label) => void
        onNotifyMaxWidthChars?: (node: Gtk.Label) => void
        onNotifyMnemonicKeyval?: (node: Gtk.Label) => void
        onNotifyMnemonicWidget?: (node: Gtk.Label) => void
        onNotifyNaturalWrapMode?: (node: Gtk.Label) => void
        onNotifySelectable?: (node: Gtk.Label) => void
        onNotifySingleLineMode?: (node: Gtk.Label) => void
        onNotifyTabs?: (node: Gtk.Label) => void
        onNotifyUseMarkup?: (node: Gtk.Label) => void
        onNotifyUseUnderline?: (node: Gtk.Label) => void
        onNotifyWidthChars?: (node: Gtk.Label) => void
        onNotifyWrap?: (node: Gtk.Label) => void
        onNotifyWrapMode?: (node: Gtk.Label) => void
        onNotifyXalign?: (node: Gtk.Label) => void
        onNotifyYalign?: (node: Gtk.Label) => void
        onNotifyAccessibleRole?: (node: Gtk.Label) => void
      }
      LevelBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.LevelBar>
        inverted?: boolean
        maxValue?: number
        minValue?: number
        mode?: Gtk.LevelBarMode
        value?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onOffsetChanged?: (node: Gtk.LevelBar, name?: string) => void
        onNotifyInverted?: (node: Gtk.LevelBar) => void
        onNotifyMaxValue?: (node: Gtk.LevelBar) => void
        onNotifyMinValue?: (node: Gtk.LevelBar) => void
        onNotifyMode?: (node: Gtk.LevelBar) => void
        onNotifyValue?: (node: Gtk.LevelBar) => void
        onNotifyAccessibleRole?: (node: Gtk.LevelBar) => void
        onNotifyOrientation?: (node: Gtk.LevelBar) => void
      }
      LinkButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LinkButton>
        uri?: string
        visited?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivateLink?: (node: Gtk.LinkButton) => boolean
        onNotifyUri?: (node: Gtk.LinkButton) => void
        onNotifyVisited?: (node: Gtk.LinkButton) => void
        onNotifyAccessibleRole?: (node: Gtk.LinkButton) => void
        onNotifyActionName?: (node: Gtk.LinkButton) => void
        onNotifyActionTarget?: (node: Gtk.LinkButton) => void
      }
      ListBase: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBase>
        orientation?: Gtk.Orientation
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onNotifyOrientation?: (node: Gtk.ListBase) => void
        onNotifyAccessibleRole?: (node: Gtk.ListBase) => void
        onNotifyHadjustment?: (node: Gtk.ListBase) => void
        onNotifyHscrollPolicy?: (node: Gtk.ListBase) => void
        onNotifyVadjustment?: (node: Gtk.ListBase) => void
        onNotifyVscrollPolicy?: (node: Gtk.ListBase) => void
      }
      ListBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBox>
        acceptUnpairedRelease?: boolean
        activateOnSingleClick?: boolean
        selectionMode?: Gtk.SelectionMode
        showSeparators?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivateCursorRow?: (node: Gtk.ListBox) => void
        onMoveCursor?: (
          node: Gtk.ListBox,
          object?: Gtk.MovementStep,
          p0?: number,
          p1?: boolean,
          p2?: boolean
        ) => void
        onRowActivated?: (node: Gtk.ListBox, row?: Gtk.ListBoxRow) => void
        onRowSelected?: (node: Gtk.ListBox, row?: Gtk.ListBoxRow) => void
        onSelectAll?: (node: Gtk.ListBox) => void
        onSelectedRowsChanged?: (node: Gtk.ListBox) => void
        onToggleCursorRow?: (node: Gtk.ListBox) => void
        onUnselectAll?: (node: Gtk.ListBox) => void
        onNotifyAcceptUnpairedRelease?: (node: Gtk.ListBox) => void
        onNotifyActivateOnSingleClick?: (node: Gtk.ListBox) => void
        onNotifySelectionMode?: (node: Gtk.ListBox) => void
        onNotifyShowSeparators?: (node: Gtk.ListBox) => void
        onNotifyAccessibleRole?: (node: Gtk.ListBox) => void
      }
      ListBoxRow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBoxRow>
        activatable?: boolean
        child?: Gtk.Widget
        selectable?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.ListBoxRow) => void
        onNotifyActivatable?: (node: Gtk.ListBoxRow) => void
        onNotifyChild?: (node: Gtk.ListBoxRow) => void
        onNotifySelectable?: (node: Gtk.ListBoxRow) => void
        onNotifyAccessibleRole?: (node: Gtk.ListBoxRow) => void
        onNotifyActionName?: (node: Gtk.ListBoxRow) => void
        onNotifyActionTarget?: (node: Gtk.ListBoxRow) => void
      }
      ListView: JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.ListView>
        enableRubberband?: boolean
        factory?: Gtk.ListItemFactory
        model?: Gtk.SelectionModel
        showSeparators?: boolean
        singleClickActivate?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (node: Gtk.ListView, position?: number) => void
        onNotifyEnableRubberband?: (node: Gtk.ListView) => void
        onNotifyFactory?: (node: Gtk.ListView) => void
        onNotifyModel?: (node: Gtk.ListView) => void
        onNotifyShowSeparators?: (node: Gtk.ListView) => void
        onNotifySingleClickActivate?: (node: Gtk.ListView) => void
        onNotifyAccessibleRole?: (node: Gtk.ListView) => void
        onNotifyOrientation?: (node: Gtk.ListView) => void
        onNotifyHadjustment?: (node: Gtk.ListView) => void
        onNotifyHscrollPolicy?: (node: Gtk.ListView) => void
        onNotifyVadjustment?: (node: Gtk.ListView) => void
        onNotifyVscrollPolicy?: (node: Gtk.ListView) => void
      }
      LockButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LockButton>
        permission?: Gio.Permission
        textLock?: string
        textUnlock?: string
        tooltipLock?: string
        tooltipNotAuthorized?: string
        tooltipUnlock?: string
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onNotifyPermission?: (node: Gtk.LockButton) => void
        onNotifyTextLock?: (node: Gtk.LockButton) => void
        onNotifyTextUnlock?: (node: Gtk.LockButton) => void
        onNotifyTooltipLock?: (node: Gtk.LockButton) => void
        onNotifyTooltipNotAuthorized?: (node: Gtk.LockButton) => void
        onNotifyTooltipUnlock?: (node: Gtk.LockButton) => void
        onNotifyAccessibleRole?: (node: Gtk.LockButton) => void
        onNotifyActionName?: (node: Gtk.LockButton) => void
        onNotifyActionTarget?: (node: Gtk.LockButton) => void
      }
      MediaControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MediaControls>
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
        onNotifyMediaStream?: (node: Gtk.MediaControls) => void
        onNotifyAccessibleRole?: (node: Gtk.MediaControls) => void
      }
      MenuButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MenuButton>
        active?: boolean
        alwaysShowArrow?: boolean
        child?: Gtk.Widget
        direction?: Gtk.ArrowType
        hasFrame?: boolean
        iconName?: string
        label?: string
        menuModel?: Gio.MenuModel
        popover?: Gtk.Popover
        primary?: boolean
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.MenuButton) => void
        onNotifyActive?: (node: Gtk.MenuButton) => void
        onNotifyAlwaysShowArrow?: (node: Gtk.MenuButton) => void
        onNotifyChild?: (node: Gtk.MenuButton) => void
        onNotifyDirection?: (node: Gtk.MenuButton) => void
        onNotifyHasFrame?: (node: Gtk.MenuButton) => void
        onNotifyIconName?: (node: Gtk.MenuButton) => void
        onNotifyLabel?: (node: Gtk.MenuButton) => void
        onNotifyMenuModel?: (node: Gtk.MenuButton) => void
        onNotifyPopover?: (node: Gtk.MenuButton) => void
        onNotifyPrimary?: (node: Gtk.MenuButton) => void
        onNotifyUseUnderline?: (node: Gtk.MenuButton) => void
        onNotifyAccessibleRole?: (node: Gtk.MenuButton) => void
      }
      MessageDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.MessageDialog>
        buttons?: Gtk.ButtonsType
        messageType?: Gtk.MessageType
        secondaryText?: string
        secondaryUseMarkup?: boolean
        text?: string
        useMarkup?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyButtons?: (node: Gtk.MessageDialog) => void
        onNotifyMessageArea?: (node: Gtk.MessageDialog) => void
        onNotifyMessageType?: (node: Gtk.MessageDialog) => void
        onNotifySecondaryText?: (node: Gtk.MessageDialog) => void
        onNotifySecondaryUseMarkup?: (node: Gtk.MessageDialog) => void
        onNotifyText?: (node: Gtk.MessageDialog) => void
        onNotifyUseMarkup?: (node: Gtk.MessageDialog) => void
        onNotifyAccessibleRole?: (node: Gtk.MessageDialog) => void
      }
      Notebook: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Notebook>
        enablePopup?: boolean
        groupName?: string
        page?: number
        scrollable?: boolean
        showBorder?: boolean
        showTabs?: boolean
        tabPos?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onChangeCurrentPage?: (node: Gtk.Notebook, object?: number) => boolean
        onCreateWindow?: (node: Gtk.Notebook, page?: Gtk.Widget) => Gtk.Notebook
        onFocusTab?: (node: Gtk.Notebook, object?: Gtk.NotebookTab) => boolean
        onMoveFocusOut?: (
          node: Gtk.Notebook,
          object?: Gtk.DirectionType
        ) => void
        onPageAdded?: (
          node: Gtk.Notebook,
          child?: Gtk.Widget,
          pageNum?: number
        ) => void
        onPageRemoved?: (
          node: Gtk.Notebook,
          child?: Gtk.Widget,
          pageNum?: number
        ) => void
        onPageReordered?: (
          node: Gtk.Notebook,
          child?: Gtk.Widget,
          pageNum?: number
        ) => void
        onReorderTab?: (
          node: Gtk.Notebook,
          object?: Gtk.DirectionType,
          p0?: boolean
        ) => boolean
        onSelectPage?: (node: Gtk.Notebook, object?: boolean) => boolean
        onSwitchPage?: (
          node: Gtk.Notebook,
          page?: Gtk.Widget,
          pageNum?: number
        ) => void
        onNotifyEnablePopup?: (node: Gtk.Notebook) => void
        onNotifyGroupName?: (node: Gtk.Notebook) => void
        onNotifyPage?: (node: Gtk.Notebook) => void
        onNotifyPages?: (node: Gtk.Notebook) => void
        onNotifyScrollable?: (node: Gtk.Notebook) => void
        onNotifyShowBorder?: (node: Gtk.Notebook) => void
        onNotifyShowTabs?: (node: Gtk.Notebook) => void
        onNotifyTabPos?: (node: Gtk.Notebook) => void
        onNotifyAccessibleRole?: (node: Gtk.Notebook) => void
      }
      Overlay: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Overlay>
        child?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        onGetChildPosition?: (
          node: Gtk.Overlay,
          widget?: Gtk.Widget,
          allocation?: Gdk.Rectangle
        ) => boolean
        onNotifyChild?: (node: Gtk.Overlay) => void
        onNotifyAccessibleRole?: (node: Gtk.Overlay) => void
      }
      PageSetupUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PageSetupUnixDialog>
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccessibleRole?: (node: Gtk.PageSetupUnixDialog) => void
      }
      Paned: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Paned>
        endChild?: Gtk.Widget
        position?: number
        positionSet?: boolean
        resizeEndChild?: boolean
        resizeStartChild?: boolean
        shrinkEndChild?: boolean
        shrinkStartChild?: boolean
        startChild?: Gtk.Widget
        wideHandle?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onAcceptPosition?: (node: Gtk.Paned) => boolean
        onCancelPosition?: (node: Gtk.Paned) => boolean
        onCycleChildFocus?: (node: Gtk.Paned, reversed?: boolean) => boolean
        onCycleHandleFocus?: (node: Gtk.Paned, reversed?: boolean) => boolean
        onMoveHandle?: (node: Gtk.Paned, scrollType?: Gtk.ScrollType) => boolean
        onToggleHandleFocus?: (node: Gtk.Paned) => boolean
        onNotifyEndChild?: (node: Gtk.Paned) => void
        onNotifyMaxPosition?: (node: Gtk.Paned) => void
        onNotifyMinPosition?: (node: Gtk.Paned) => void
        onNotifyPosition?: (node: Gtk.Paned) => void
        onNotifyPositionSet?: (node: Gtk.Paned) => void
        onNotifyResizeEndChild?: (node: Gtk.Paned) => void
        onNotifyResizeStartChild?: (node: Gtk.Paned) => void
        onNotifyShrinkEndChild?: (node: Gtk.Paned) => void
        onNotifyShrinkStartChild?: (node: Gtk.Paned) => void
        onNotifyStartChild?: (node: Gtk.Paned) => void
        onNotifyWideHandle?: (node: Gtk.Paned) => void
        onNotifyAccessibleRole?: (node: Gtk.Paned) => void
        onNotifyOrientation?: (node: Gtk.Paned) => void
      }
      PasswordEntry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PasswordEntry>
        activatesDefault?: boolean
        extraMenu?: Gio.MenuModel
        placeholderText?: string
        showPeekIcon?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: (node: Gtk.PasswordEntry) => void
        onChanged?: (node: Gtk.PasswordEntry) => void
        onDeleteText?: (
          node: Gtk.PasswordEntry,
          startPos?: number,
          endPos?: number
        ) => void
        onInsertText?: (
          node: Gtk.PasswordEntry,
          text?: string,
          length?: number,
          position?: number
        ) => void
        onNotifyActivatesDefault?: (node: Gtk.PasswordEntry) => void
        onNotifyExtraMenu?: (node: Gtk.PasswordEntry) => void
        onNotifyPlaceholderText?: (node: Gtk.PasswordEntry) => void
        onNotifyShowPeekIcon?: (node: Gtk.PasswordEntry) => void
        onNotifyAccessibleRole?: (node: Gtk.PasswordEntry) => void
        onNotifyCursorPosition?: (node: Gtk.PasswordEntry) => void
        onNotifyEditable?: (node: Gtk.PasswordEntry) => void
        onNotifyEnableUndo?: (node: Gtk.PasswordEntry) => void
        onNotifyMaxWidthChars?: (node: Gtk.PasswordEntry) => void
        onNotifySelectionBound?: (node: Gtk.PasswordEntry) => void
        onNotifyText?: (node: Gtk.PasswordEntry) => void
        onNotifyWidthChars?: (node: Gtk.PasswordEntry) => void
        onNotifyXalign?: (node: Gtk.PasswordEntry) => void
      }
      Picture: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Picture>
        alternativeText?: string
        canShrink?: boolean
        contentFit?: Gtk.ContentFit
        file?: Gio.File
        keepAspectRatio?: boolean
        paintable?: Gdk.Paintable
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAlternativeText?: (node: Gtk.Picture) => void
        onNotifyCanShrink?: (node: Gtk.Picture) => void
        onNotifyContentFit?: (node: Gtk.Picture) => void
        onNotifyFile?: (node: Gtk.Picture) => void
        onNotifyKeepAspectRatio?: (node: Gtk.Picture) => void
        onNotifyPaintable?: (node: Gtk.Picture) => void
        onNotifyAccessibleRole?: (node: Gtk.Picture) => void
      }
      Popover: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Popover>
        autohide?: boolean
        cascadePopdown?: boolean
        child?: Gtk.Widget
        defaultWidget?: Gtk.Widget
        hasArrow?: boolean
        mnemonicsVisible?: boolean
        pointingTo?: Gdk.Rectangle
        position?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onActivateDefault?: (node: Gtk.Popover) => void
        onClosed?: (node: Gtk.Popover) => void
        onNotifyAutohide?: (node: Gtk.Popover) => void
        onNotifyCascadePopdown?: (node: Gtk.Popover) => void
        onNotifyChild?: (node: Gtk.Popover) => void
        onNotifyDefaultWidget?: (node: Gtk.Popover) => void
        onNotifyHasArrow?: (node: Gtk.Popover) => void
        onNotifyMnemonicsVisible?: (node: Gtk.Popover) => void
        onNotifyPointingTo?: (node: Gtk.Popover) => void
        onNotifyPosition?: (node: Gtk.Popover) => void
        onNotifyAccessibleRole?: (node: Gtk.Popover) => void
      }
      PopoverMenu: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.PopoverMenu>
        menuModel?: Gio.MenuModel
        visibleSubmenu?: string
        accessibleRole?: Gtk.AccessibleRole
        onNotifyMenuModel?: (node: Gtk.PopoverMenu) => void
        onNotifyVisibleSubmenu?: (node: Gtk.PopoverMenu) => void
        onNotifyAccessibleRole?: (node: Gtk.PopoverMenu) => void
      }
      PopoverMenuBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PopoverMenuBar>
        menuModel?: Gio.MenuModel
        accessibleRole?: Gtk.AccessibleRole
        onNotifyMenuModel?: (node: Gtk.PopoverMenuBar) => void
        onNotifyAccessibleRole?: (node: Gtk.PopoverMenuBar) => void
      }
      PrintUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PrintUnixDialog>
        currentPage?: number
        embedPageSetup?: boolean
        hasSelection?: boolean
        manualCapabilities?: Gtk.PrintCapabilities
        pageSetup?: Gtk.PageSetup
        printSettings?: Gtk.PrintSettings
        supportSelection?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyCurrentPage?: (node: Gtk.PrintUnixDialog) => void
        onNotifyEmbedPageSetup?: (node: Gtk.PrintUnixDialog) => void
        onNotifyHasSelection?: (node: Gtk.PrintUnixDialog) => void
        onNotifyManualCapabilities?: (node: Gtk.PrintUnixDialog) => void
        onNotifyPageSetup?: (node: Gtk.PrintUnixDialog) => void
        onNotifyPrintSettings?: (node: Gtk.PrintUnixDialog) => void
        onNotifySelectedPrinter?: (node: Gtk.PrintUnixDialog) => void
        onNotifySupportSelection?: (node: Gtk.PrintUnixDialog) => void
        onNotifyAccessibleRole?: (node: Gtk.PrintUnixDialog) => void
      }
      ProgressBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ProgressBar>
        ellipsize?: Pango.EllipsizeMode
        fraction?: number
        inverted?: boolean
        pulseStep?: number
        showText?: boolean
        text?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyEllipsize?: (node: Gtk.ProgressBar) => void
        onNotifyFraction?: (node: Gtk.ProgressBar) => void
        onNotifyInverted?: (node: Gtk.ProgressBar) => void
        onNotifyPulseStep?: (node: Gtk.ProgressBar) => void
        onNotifyShowText?: (node: Gtk.ProgressBar) => void
        onNotifyText?: (node: Gtk.ProgressBar) => void
        onNotifyAccessibleRole?: (node: Gtk.ProgressBar) => void
        onNotifyOrientation?: (node: Gtk.ProgressBar) => void
      }
      Range: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Range>
        adjustment?: Gtk.Adjustment
        fillLevel?: number
        inverted?: boolean
        restrictToFillLevel?: boolean
        roundDigits?: number
        showFillLevel?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onAdjustBounds?: (node: Gtk.Range, value?: number) => void
        onChangeValue?: (
          node: Gtk.Range,
          scroll?: Gtk.ScrollType,
          value?: number
        ) => boolean
        onMoveSlider?: (node: Gtk.Range, step?: Gtk.ScrollType) => void
        onValueChanged?: (node: Gtk.Range) => void
        onNotifyAdjustment?: (node: Gtk.Range) => void
        onNotifyFillLevel?: (node: Gtk.Range) => void
        onNotifyInverted?: (node: Gtk.Range) => void
        onNotifyRestrictToFillLevel?: (node: Gtk.Range) => void
        onNotifyRoundDigits?: (node: Gtk.Range) => void
        onNotifyShowFillLevel?: (node: Gtk.Range) => void
        onNotifyAccessibleRole?: (node: Gtk.Range) => void
        onNotifyOrientation?: (node: Gtk.Range) => void
      }
      Revealer: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Revealer>
        child?: Gtk.Widget
        revealChild?: boolean
        transitionDuration?: number
        transitionType?: Gtk.RevealerTransitionType
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChild?: (node: Gtk.Revealer) => void
        onNotifyChildRevealed?: (node: Gtk.Revealer) => void
        onNotifyRevealChild?: (node: Gtk.Revealer) => void
        onNotifyTransitionDuration?: (node: Gtk.Revealer) => void
        onNotifyTransitionType?: (node: Gtk.Revealer) => void
        onNotifyAccessibleRole?: (node: Gtk.Revealer) => void
      }
      Scale: JSX.IntrinsicElements["Range"] & {
        ref?: React.Ref<Gtk.Scale>
        digits?: number
        drawValue?: boolean
        hasOrigin?: boolean
        valuePos?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyDigits?: (node: Gtk.Scale) => void
        onNotifyDrawValue?: (node: Gtk.Scale) => void
        onNotifyHasOrigin?: (node: Gtk.Scale) => void
        onNotifyValuePos?: (node: Gtk.Scale) => void
        onNotifyAccessibleRole?: (node: Gtk.Scale) => void
        onNotifyOrientation?: (node: Gtk.Scale) => void
      }
      ScaleButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScaleButton>
        adjustment?: Gtk.Adjustment
        icons?: string[]
        value?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onPopdown?: (node: Gtk.ScaleButton) => void
        onPopup?: (node: Gtk.ScaleButton) => void
        onValueChanged?: (node: Gtk.ScaleButton, value?: number) => void
        onNotifyActive?: (node: Gtk.ScaleButton) => void
        onNotifyAdjustment?: (node: Gtk.ScaleButton) => void
        onNotifyIcons?: (node: Gtk.ScaleButton) => void
        onNotifyValue?: (node: Gtk.ScaleButton) => void
        onNotifyAccessibleRole?: (node: Gtk.ScaleButton) => void
        onNotifyOrientation?: (node: Gtk.ScaleButton) => void
      }
      Scrollbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Scrollbar>
        adjustment?: Gtk.Adjustment
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyAdjustment?: (node: Gtk.Scrollbar) => void
        onNotifyAccessibleRole?: (node: Gtk.Scrollbar) => void
        onNotifyOrientation?: (node: Gtk.Scrollbar) => void
      }
      ScrolledWindow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScrolledWindow>
        child?: Gtk.Widget
        hadjustment?: Gtk.Adjustment
        hasFrame?: boolean
        hscrollbarPolicy?: Gtk.PolicyType
        kineticScrolling?: boolean
        maxContentHeight?: number
        maxContentWidth?: number
        minContentHeight?: number
        minContentWidth?: number
        overlayScrolling?: boolean
        propagateNaturalHeight?: boolean
        propagateNaturalWidth?: boolean
        vadjustment?: Gtk.Adjustment
        vscrollbarPolicy?: Gtk.PolicyType
        windowPlacement?: Gtk.CornerType
        accessibleRole?: Gtk.AccessibleRole
        onEdgeOvershot?: (
          node: Gtk.ScrolledWindow,
          pos?: Gtk.PositionType
        ) => void
        onEdgeReached?: (
          node: Gtk.ScrolledWindow,
          pos?: Gtk.PositionType
        ) => void
        onMoveFocusOut?: (
          node: Gtk.ScrolledWindow,
          directionType?: Gtk.DirectionType
        ) => void
        onScrollChild?: (
          node: Gtk.ScrolledWindow,
          scroll?: Gtk.ScrollType,
          horizontal?: boolean
        ) => boolean
        onNotifyChild?: (node: Gtk.ScrolledWindow) => void
        onNotifyHadjustment?: (node: Gtk.ScrolledWindow) => void
        onNotifyHasFrame?: (node: Gtk.ScrolledWindow) => void
        onNotifyHscrollbarPolicy?: (node: Gtk.ScrolledWindow) => void
        onNotifyKineticScrolling?: (node: Gtk.ScrolledWindow) => void
        onNotifyMaxContentHeight?: (node: Gtk.ScrolledWindow) => void
        onNotifyMaxContentWidth?: (node: Gtk.ScrolledWindow) => void
        onNotifyMinContentHeight?: (node: Gtk.ScrolledWindow) => void
        onNotifyMinContentWidth?: (node: Gtk.ScrolledWindow) => void
        onNotifyOverlayScrolling?: (node: Gtk.ScrolledWindow) => void
        onNotifyPropagateNaturalHeight?: (node: Gtk.ScrolledWindow) => void
        onNotifyPropagateNaturalWidth?: (node: Gtk.ScrolledWindow) => void
        onNotifyVadjustment?: (node: Gtk.ScrolledWindow) => void
        onNotifyVscrollbarPolicy?: (node: Gtk.ScrolledWindow) => void
        onNotifyWindowPlacement?: (node: Gtk.ScrolledWindow) => void
        onNotifyAccessibleRole?: (node: Gtk.ScrolledWindow) => void
      }
      SearchBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchBar>
        child?: Gtk.Widget
        keyCaptureWidget?: Gtk.Widget
        searchModeEnabled?: boolean
        showCloseButton?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChild?: (node: Gtk.SearchBar) => void
        onNotifyKeyCaptureWidget?: (node: Gtk.SearchBar) => void
        onNotifySearchModeEnabled?: (node: Gtk.SearchBar) => void
        onNotifyShowCloseButton?: (node: Gtk.SearchBar) => void
        onNotifyAccessibleRole?: (node: Gtk.SearchBar) => void
      }
      SearchEntry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchEntry>
        activatesDefault?: boolean
        placeholderText?: string
        searchDelay?: number
        accessibleRole?: Gtk.AccessibleRole
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: (node: Gtk.SearchEntry) => void
        onNextMatch?: (node: Gtk.SearchEntry) => void
        onPreviousMatch?: (node: Gtk.SearchEntry) => void
        onSearchChanged?: (node: Gtk.SearchEntry) => void
        onSearchStarted?: (node: Gtk.SearchEntry) => void
        onStopSearch?: (node: Gtk.SearchEntry) => void
        onChanged?: (node: Gtk.SearchEntry) => void
        onDeleteText?: (
          node: Gtk.SearchEntry,
          startPos?: number,
          endPos?: number
        ) => void
        onInsertText?: (
          node: Gtk.SearchEntry,
          text?: string,
          length?: number,
          position?: number
        ) => void
        onNotifyActivatesDefault?: (node: Gtk.SearchEntry) => void
        onNotifyPlaceholderText?: (node: Gtk.SearchEntry) => void
        onNotifySearchDelay?: (node: Gtk.SearchEntry) => void
        onNotifyAccessibleRole?: (node: Gtk.SearchEntry) => void
        onNotifyCursorPosition?: (node: Gtk.SearchEntry) => void
        onNotifyEditable?: (node: Gtk.SearchEntry) => void
        onNotifyEnableUndo?: (node: Gtk.SearchEntry) => void
        onNotifyMaxWidthChars?: (node: Gtk.SearchEntry) => void
        onNotifySelectionBound?: (node: Gtk.SearchEntry) => void
        onNotifyText?: (node: Gtk.SearchEntry) => void
        onNotifyWidthChars?: (node: Gtk.SearchEntry) => void
        onNotifyXalign?: (node: Gtk.SearchEntry) => void
      }
      Separator: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Separator>
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyAccessibleRole?: (node: Gtk.Separator) => void
        onNotifyOrientation?: (node: Gtk.Separator) => void
      }
      ShortcutLabel: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutLabel>
        accelerator?: string
        disabledText?: string
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccelerator?: (node: Gtk.ShortcutLabel) => void
        onNotifyDisabledText?: (node: Gtk.ShortcutLabel) => void
        onNotifyAccessibleRole?: (node: Gtk.ShortcutLabel) => void
      }
      ShortcutsGroup: JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsGroup>
        accelSizeGroup?: Gtk.SizeGroup
        title?: string
        titleSizeGroup?: Gtk.SizeGroup
        view?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyAccelSizeGroup?: (node: Gtk.ShortcutsGroup) => void
        onNotifyHeight?: (node: Gtk.ShortcutsGroup) => void
        onNotifyTitle?: (node: Gtk.ShortcutsGroup) => void
        onNotifyTitleSizeGroup?: (node: Gtk.ShortcutsGroup) => void
        onNotifyView?: (node: Gtk.ShortcutsGroup) => void
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsGroup) => void
        onNotifyOrientation?: (node: Gtk.ShortcutsGroup) => void
      }
      ShortcutsSection: JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsSection>
        maxHeight?: number
        sectionName?: string
        title?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onChangeCurrentPage?: (
          node: Gtk.ShortcutsSection,
          object?: number
        ) => boolean
        onNotifyMaxHeight?: (node: Gtk.ShortcutsSection) => void
        onNotifySectionName?: (node: Gtk.ShortcutsSection) => void
        onNotifyTitle?: (node: Gtk.ShortcutsSection) => void
        onNotifyViewName?: (node: Gtk.ShortcutsSection) => void
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsSection) => void
        onNotifyOrientation?: (node: Gtk.ShortcutsSection) => void
      }
      ShortcutsShortcut: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutsShortcut>
        accelSizeGroup?: Gtk.SizeGroup
        accelerator?: string
        actionName?: string
        direction?: Gtk.TextDirection
        icon?: Gio.Icon
        iconSet?: boolean
        shortcutType?: Gtk.ShortcutType
        subtitle?: string
        subtitleSet?: boolean
        title?: string
        titleSizeGroup?: Gtk.SizeGroup
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccelSizeGroup?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyAccelerator?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyActionName?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyDirection?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyIcon?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyIconSet?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyShortcutType?: (node: Gtk.ShortcutsShortcut) => void
        onNotifySubtitle?: (node: Gtk.ShortcutsShortcut) => void
        onNotifySubtitleSet?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyTitle?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyTitleSizeGroup?: (node: Gtk.ShortcutsShortcut) => void
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsShortcut) => void
      }
      ShortcutsWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ShortcutsWindow>
        sectionName?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        onClose?: (node: Gtk.ShortcutsWindow) => void
        onSearch?: (node: Gtk.ShortcutsWindow) => void
        onNotifySectionName?: (node: Gtk.ShortcutsWindow) => void
        onNotifyViewName?: (node: Gtk.ShortcutsWindow) => void
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsWindow) => void
      }
      SpinButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SpinButton>
        adjustment?: Gtk.Adjustment
        climbRate?: number
        digits?: number
        numeric?: boolean
        snapToTicks?: boolean
        updatePolicy?: Gtk.SpinButtonUpdatePolicy
        value?: number
        wrap?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        xalign?: number
        orientation?: Gtk.Orientation
        onChangeValue?: (node: Gtk.SpinButton, scroll?: Gtk.ScrollType) => void
        onInput?: (node: Gtk.SpinButton, newValue?: number) => number
        onOutput?: (node: Gtk.SpinButton) => boolean
        onValueChanged?: (node: Gtk.SpinButton) => void
        onWrapped?: (node: Gtk.SpinButton) => void
        onEditingDone?: (node: Gtk.SpinButton) => void
        onRemoveWidget?: (node: Gtk.SpinButton) => void
        onChanged?: (node: Gtk.SpinButton) => void
        onDeleteText?: (
          node: Gtk.SpinButton,
          startPos?: number,
          endPos?: number
        ) => void
        onInsertText?: (
          node: Gtk.SpinButton,
          text?: string,
          length?: number,
          position?: number
        ) => void
        onNotifyAdjustment?: (node: Gtk.SpinButton) => void
        onNotifyClimbRate?: (node: Gtk.SpinButton) => void
        onNotifyDigits?: (node: Gtk.SpinButton) => void
        onNotifyNumeric?: (node: Gtk.SpinButton) => void
        onNotifySnapToTicks?: (node: Gtk.SpinButton) => void
        onNotifyUpdatePolicy?: (node: Gtk.SpinButton) => void
        onNotifyValue?: (node: Gtk.SpinButton) => void
        onNotifyWrap?: (node: Gtk.SpinButton) => void
        onNotifyAccessibleRole?: (node: Gtk.SpinButton) => void
        onNotifyEditingCanceled?: (node: Gtk.SpinButton) => void
        onNotifyCursorPosition?: (node: Gtk.SpinButton) => void
        onNotifyEditable?: (node: Gtk.SpinButton) => void
        onNotifyEnableUndo?: (node: Gtk.SpinButton) => void
        onNotifyMaxWidthChars?: (node: Gtk.SpinButton) => void
        onNotifySelectionBound?: (node: Gtk.SpinButton) => void
        onNotifyText?: (node: Gtk.SpinButton) => void
        onNotifyWidthChars?: (node: Gtk.SpinButton) => void
        onNotifyXalign?: (node: Gtk.SpinButton) => void
        onNotifyOrientation?: (node: Gtk.SpinButton) => void
      }
      Spinner: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Spinner>
        spinning?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifySpinning?: (node: Gtk.Spinner) => void
        onNotifyAccessibleRole?: (node: Gtk.Spinner) => void
      }
      Stack: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Stack>
        hhomogeneous?: boolean
        interpolateSize?: boolean
        transitionDuration?: number
        transitionType?: Gtk.StackTransitionType
        vhomogeneous?: boolean
        visibleChild?: Gtk.Widget
        visibleChildName?: string
        accessibleRole?: Gtk.AccessibleRole
        onNotifyHhomogeneous?: (node: Gtk.Stack) => void
        onNotifyInterpolateSize?: (node: Gtk.Stack) => void
        onNotifyPages?: (node: Gtk.Stack) => void
        onNotifyTransitionDuration?: (node: Gtk.Stack) => void
        onNotifyTransitionRunning?: (node: Gtk.Stack) => void
        onNotifyTransitionType?: (node: Gtk.Stack) => void
        onNotifyVhomogeneous?: (node: Gtk.Stack) => void
        onNotifyVisibleChild?: (node: Gtk.Stack) => void
        onNotifyVisibleChildName?: (node: Gtk.Stack) => void
        onNotifyAccessibleRole?: (node: Gtk.Stack) => void
      }
      StackSidebar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSidebar>
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
        onNotifyStack?: (node: Gtk.StackSidebar) => void
        onNotifyAccessibleRole?: (node: Gtk.StackSidebar) => void
      }
      StackSwitcher: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSwitcher>
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyStack?: (node: Gtk.StackSwitcher) => void
        onNotifyAccessibleRole?: (node: Gtk.StackSwitcher) => void
        onNotifyOrientation?: (node: Gtk.StackSwitcher) => void
      }
      Statusbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Statusbar>
        accessibleRole?: Gtk.AccessibleRole
        onTextPopped?: (
          node: Gtk.Statusbar,
          contextId?: number,
          text?: string
        ) => void
        onTextPushed?: (
          node: Gtk.Statusbar,
          contextId?: number,
          text?: string
        ) => void
        onNotifyAccessibleRole?: (node: Gtk.Statusbar) => void
      }
      Switch: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Switch>
        active?: boolean
        state?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.Switch) => void
        onStateSet?: (node: Gtk.Switch, state?: boolean) => boolean
        onNotifyActive?: (node: Gtk.Switch) => void
        onNotifyState?: (node: Gtk.Switch) => void
        onNotifyAccessibleRole?: (node: Gtk.Switch) => void
        onNotifyActionName?: (node: Gtk.Switch) => void
        onNotifyActionTarget?: (node: Gtk.Switch) => void
      }
      Text: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Text>
        activatesDefault?: boolean
        attributes?: Pango.AttrList
        buffer?: Gtk.EntryBuffer
        enableEmojiCompletion?: boolean
        extraMenu?: Gio.MenuModel
        imModule?: string
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        invisibleChar?: number
        invisibleCharSet?: boolean
        maxLength?: number
        overwriteMode?: boolean
        placeholderText?: string
        propagateTextWidth?: boolean
        tabs?: Pango.TabArray
        truncateMultiline?: boolean
        visibility?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: (node: Gtk.Text) => void
        onBackspace?: (node: Gtk.Text) => void
        onCopyClipboard?: (node: Gtk.Text) => void
        onCutClipboard?: (node: Gtk.Text) => void
        onDeleteFromCursor?: (
          node: Gtk.Text,
          type?: Gtk.DeleteType,
          count?: number
        ) => void
        onInsertAtCursor?: (node: Gtk.Text, string?: string) => void
        onInsertEmoji?: (node: Gtk.Text) => void
        onMoveCursor?: (
          node: Gtk.Text,
          step?: Gtk.MovementStep,
          count?: number,
          extend?: boolean
        ) => void
        onPasteClipboard?: (node: Gtk.Text) => void
        onPreeditChanged?: (node: Gtk.Text, preedit?: string) => void
        onToggleOverwrite?: (node: Gtk.Text) => void
        onChanged?: (node: Gtk.Text) => void
        onDeleteText?: (
          node: Gtk.Text,
          startPos?: number,
          endPos?: number
        ) => void
        onInsertText?: (
          node: Gtk.Text,
          text?: string,
          length?: number,
          position?: number
        ) => void
        onNotifyActivatesDefault?: (node: Gtk.Text) => void
        onNotifyAttributes?: (node: Gtk.Text) => void
        onNotifyBuffer?: (node: Gtk.Text) => void
        onNotifyEnableEmojiCompletion?: (node: Gtk.Text) => void
        onNotifyExtraMenu?: (node: Gtk.Text) => void
        onNotifyImModule?: (node: Gtk.Text) => void
        onNotifyInputHints?: (node: Gtk.Text) => void
        onNotifyInputPurpose?: (node: Gtk.Text) => void
        onNotifyInvisibleChar?: (node: Gtk.Text) => void
        onNotifyInvisibleCharSet?: (node: Gtk.Text) => void
        onNotifyMaxLength?: (node: Gtk.Text) => void
        onNotifyOverwriteMode?: (node: Gtk.Text) => void
        onNotifyPlaceholderText?: (node: Gtk.Text) => void
        onNotifyPropagateTextWidth?: (node: Gtk.Text) => void
        onNotifyScrollOffset?: (node: Gtk.Text) => void
        onNotifyTabs?: (node: Gtk.Text) => void
        onNotifyTruncateMultiline?: (node: Gtk.Text) => void
        onNotifyVisibility?: (node: Gtk.Text) => void
        onNotifyAccessibleRole?: (node: Gtk.Text) => void
        onNotifyCursorPosition?: (node: Gtk.Text) => void
        onNotifyEditable?: (node: Gtk.Text) => void
        onNotifyEnableUndo?: (node: Gtk.Text) => void
        onNotifyMaxWidthChars?: (node: Gtk.Text) => void
        onNotifySelectionBound?: (node: Gtk.Text) => void
        onNotifyText?: (node: Gtk.Text) => void
        onNotifyWidthChars?: (node: Gtk.Text) => void
        onNotifyXalign?: (node: Gtk.Text) => void
      }
      TextView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TextView>
        acceptsTab?: boolean
        bottomMargin?: number
        buffer?: Gtk.TextBuffer
        cursorVisible?: boolean
        editable?: boolean
        extraMenu?: Gio.MenuModel
        imModule?: string
        indent?: number
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        justification?: Gtk.Justification
        leftMargin?: number
        monospace?: boolean
        overwrite?: boolean
        pixelsAboveLines?: number
        pixelsBelowLines?: number
        pixelsInsideWrap?: number
        rightMargin?: number
        tabs?: Pango.TabArray
        topMargin?: number
        wrapMode?: Gtk.WrapMode
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onBackspace?: (node: Gtk.TextView) => void
        onCopyClipboard?: (node: Gtk.TextView) => void
        onCutClipboard?: (node: Gtk.TextView) => void
        onDeleteFromCursor?: (
          node: Gtk.TextView,
          type?: Gtk.DeleteType,
          count?: number
        ) => void
        onExtendSelection?: (
          node: Gtk.TextView,
          granularity?: Gtk.TextExtendSelection,
          location?: Gtk.TextIter,
          start?: Gtk.TextIter,
          end?: Gtk.TextIter
        ) => boolean
        onInsertAtCursor?: (node: Gtk.TextView, string?: string) => void
        onInsertEmoji?: (node: Gtk.TextView) => void
        onMoveCursor?: (
          node: Gtk.TextView,
          step?: Gtk.MovementStep,
          count?: number,
          extendSelection?: boolean
        ) => void
        onMoveViewport?: (
          node: Gtk.TextView,
          step?: Gtk.ScrollStep,
          count?: number
        ) => void
        onPasteClipboard?: (node: Gtk.TextView) => void
        onPreeditChanged?: (node: Gtk.TextView, preedit?: string) => void
        onSelectAll?: (node: Gtk.TextView, select?: boolean) => void
        onSetAnchor?: (node: Gtk.TextView) => void
        onToggleCursorVisible?: (node: Gtk.TextView) => void
        onToggleOverwrite?: (node: Gtk.TextView) => void
        onNotifyAcceptsTab?: (node: Gtk.TextView) => void
        onNotifyBottomMargin?: (node: Gtk.TextView) => void
        onNotifyBuffer?: (node: Gtk.TextView) => void
        onNotifyCursorVisible?: (node: Gtk.TextView) => void
        onNotifyEditable?: (node: Gtk.TextView) => void
        onNotifyExtraMenu?: (node: Gtk.TextView) => void
        onNotifyImModule?: (node: Gtk.TextView) => void
        onNotifyIndent?: (node: Gtk.TextView) => void
        onNotifyInputHints?: (node: Gtk.TextView) => void
        onNotifyInputPurpose?: (node: Gtk.TextView) => void
        onNotifyJustification?: (node: Gtk.TextView) => void
        onNotifyLeftMargin?: (node: Gtk.TextView) => void
        onNotifyMonospace?: (node: Gtk.TextView) => void
        onNotifyOverwrite?: (node: Gtk.TextView) => void
        onNotifyPixelsAboveLines?: (node: Gtk.TextView) => void
        onNotifyPixelsBelowLines?: (node: Gtk.TextView) => void
        onNotifyPixelsInsideWrap?: (node: Gtk.TextView) => void
        onNotifyRightMargin?: (node: Gtk.TextView) => void
        onNotifyTabs?: (node: Gtk.TextView) => void
        onNotifyTopMargin?: (node: Gtk.TextView) => void
        onNotifyWrapMode?: (node: Gtk.TextView) => void
        onNotifyAccessibleRole?: (node: Gtk.TextView) => void
        onNotifyHadjustment?: (node: Gtk.TextView) => void
        onNotifyHscrollPolicy?: (node: Gtk.TextView) => void
        onNotifyVadjustment?: (node: Gtk.TextView) => void
        onNotifyVscrollPolicy?: (node: Gtk.TextView) => void
      }
      ToggleButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.ToggleButton>
        active?: boolean
        group?: Gtk.ToggleButton
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onToggled?: (node: Gtk.ToggleButton) => void
        onNotifyActive?: (node: Gtk.ToggleButton) => void
        onNotifyGroup?: (node: Gtk.ToggleButton) => void
        onNotifyAccessibleRole?: (node: Gtk.ToggleButton) => void
        onNotifyActionName?: (node: Gtk.ToggleButton) => void
        onNotifyActionTarget?: (node: Gtk.ToggleButton) => void
      }
      TreeExpander: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeExpander>
        child?: Gtk.Widget
        hideExpander?: boolean
        indentForDepth?: boolean
        indentForIcon?: boolean
        listRow?: Gtk.TreeListRow
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChild?: (node: Gtk.TreeExpander) => void
        onNotifyHideExpander?: (node: Gtk.TreeExpander) => void
        onNotifyIndentForDepth?: (node: Gtk.TreeExpander) => void
        onNotifyIndentForIcon?: (node: Gtk.TreeExpander) => void
        onNotifyItem?: (node: Gtk.TreeExpander) => void
        onNotifyListRow?: (node: Gtk.TreeExpander) => void
        onNotifyAccessibleRole?: (node: Gtk.TreeExpander) => void
      }
      TreeView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeView>
        activateOnSingleClick?: boolean
        enableGridLines?: Gtk.TreeViewGridLines
        enableSearch?: boolean
        enableTreeLines?: boolean
        expanderColumn?: Gtk.TreeViewColumn
        fixedHeightMode?: boolean
        headersClickable?: boolean
        headersVisible?: boolean
        hoverExpand?: boolean
        hoverSelection?: boolean
        levelIndentation?: number
        model?: Gtk.TreeModel
        reorderable?: boolean
        rubberBanding?: boolean
        searchColumn?: number
        showExpanders?: boolean
        tooltipColumn?: number
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onColumnsChanged?: (node: Gtk.TreeView) => void
        onCursorChanged?: (node: Gtk.TreeView) => void
        onExpandCollapseCursorRow?: (
          node: Gtk.TreeView,
          object?: boolean,
          p0?: boolean,
          p1?: boolean
        ) => boolean
        onMoveCursor?: (
          node: Gtk.TreeView,
          step?: Gtk.MovementStep,
          direction?: number,
          extend?: boolean,
          modify?: boolean
        ) => boolean
        onRowActivated?: (
          node: Gtk.TreeView,
          path?: Gtk.TreePath,
          column?: Gtk.TreeViewColumn
        ) => void
        onRowCollapsed?: (
          node: Gtk.TreeView,
          iter?: Gtk.TreeIter,
          path?: Gtk.TreePath
        ) => void
        onRowExpanded?: (
          node: Gtk.TreeView,
          iter?: Gtk.TreeIter,
          path?: Gtk.TreePath
        ) => void
        onSelectAll?: (node: Gtk.TreeView) => boolean
        onSelectCursorParent?: (node: Gtk.TreeView) => boolean
        onSelectCursorRow?: (node: Gtk.TreeView, object?: boolean) => boolean
        onStartInteractiveSearch?: (node: Gtk.TreeView) => boolean
        onTestCollapseRow?: (
          node: Gtk.TreeView,
          iter?: Gtk.TreeIter,
          path?: Gtk.TreePath
        ) => boolean
        onTestExpandRow?: (
          node: Gtk.TreeView,
          iter?: Gtk.TreeIter,
          path?: Gtk.TreePath
        ) => boolean
        onToggleCursorRow?: (node: Gtk.TreeView) => boolean
        onUnselectAll?: (node: Gtk.TreeView) => boolean
        onNotifyActivateOnSingleClick?: (node: Gtk.TreeView) => void
        onNotifyEnableGridLines?: (node: Gtk.TreeView) => void
        onNotifyEnableSearch?: (node: Gtk.TreeView) => void
        onNotifyEnableTreeLines?: (node: Gtk.TreeView) => void
        onNotifyExpanderColumn?: (node: Gtk.TreeView) => void
        onNotifyFixedHeightMode?: (node: Gtk.TreeView) => void
        onNotifyHeadersClickable?: (node: Gtk.TreeView) => void
        onNotifyHeadersVisible?: (node: Gtk.TreeView) => void
        onNotifyHoverExpand?: (node: Gtk.TreeView) => void
        onNotifyHoverSelection?: (node: Gtk.TreeView) => void
        onNotifyLevelIndentation?: (node: Gtk.TreeView) => void
        onNotifyModel?: (node: Gtk.TreeView) => void
        onNotifyReorderable?: (node: Gtk.TreeView) => void
        onNotifyRubberBanding?: (node: Gtk.TreeView) => void
        onNotifySearchColumn?: (node: Gtk.TreeView) => void
        onNotifyShowExpanders?: (node: Gtk.TreeView) => void
        onNotifyTooltipColumn?: (node: Gtk.TreeView) => void
        onNotifyAccessibleRole?: (node: Gtk.TreeView) => void
        onNotifyHadjustment?: (node: Gtk.TreeView) => void
        onNotifyHscrollPolicy?: (node: Gtk.TreeView) => void
        onNotifyVadjustment?: (node: Gtk.TreeView) => void
        onNotifyVscrollPolicy?: (node: Gtk.TreeView) => void
      }
      Video: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Video>
        autoplay?: boolean
        file?: Gio.File
        loop?: boolean
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAutoplay?: (node: Gtk.Video) => void
        onNotifyFile?: (node: Gtk.Video) => void
        onNotifyLoop?: (node: Gtk.Video) => void
        onNotifyMediaStream?: (node: Gtk.Video) => void
        onNotifyAccessibleRole?: (node: Gtk.Video) => void
      }
      Viewport: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Viewport>
        child?: Gtk.Widget
        scrollToFocus?: boolean
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onNotifyChild?: (node: Gtk.Viewport) => void
        onNotifyScrollToFocus?: (node: Gtk.Viewport) => void
        onNotifyAccessibleRole?: (node: Gtk.Viewport) => void
        onNotifyHadjustment?: (node: Gtk.Viewport) => void
        onNotifyHscrollPolicy?: (node: Gtk.Viewport) => void
        onNotifyVadjustment?: (node: Gtk.Viewport) => void
        onNotifyVscrollPolicy?: (node: Gtk.Viewport) => void
      }
      VolumeButton: JSX.IntrinsicElements["ScaleButton"] & {
        ref?: React.Ref<Gtk.VolumeButton>
        useSymbolic?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyUseSymbolic?: (node: Gtk.VolumeButton) => void
        onNotifyAccessibleRole?: (node: Gtk.VolumeButton) => void
        onNotifyOrientation?: (node: Gtk.VolumeButton) => void
      }
      Widget: {
        ref?: React.Ref<Gtk.Widget>
        children?: React.ReactNode
        canFocus?: boolean
        canTarget?: boolean
        cssClasses?: string[]
        cssName?: string
        cursor?: Gdk.Cursor
        focusOnClick?: boolean
        focusable?: boolean
        halign?: Gtk.Align
        hasTooltip?: boolean
        heightRequest?: number
        hexpand?: boolean
        hexpandSet?: boolean
        layoutManager?: Gtk.LayoutManager
        marginBottom?: number
        marginEnd?: number
        marginStart?: number
        marginTop?: number
        name?: string
        opacity?: number
        overflow?: Gtk.Overflow
        receivesDefault?: boolean
        sensitive?: boolean
        tooltipMarkup?: string
        tooltipText?: string
        valign?: Gtk.Align
        vexpand?: boolean
        vexpandSet?: boolean
        visible?: boolean
        widthRequest?: number
        accessibleRole?: Gtk.AccessibleRole
        onDestroy?: (node: Gtk.Widget) => void
        onDirectionChanged?: (
          node: Gtk.Widget,
          previousDirection?: Gtk.TextDirection
        ) => void
        onHide?: (node: Gtk.Widget) => void
        onKeynavFailed?: (
          node: Gtk.Widget,
          direction?: Gtk.DirectionType
        ) => boolean
        onMap?: (node: Gtk.Widget) => void
        onMnemonicActivate?: (
          node: Gtk.Widget,
          groupCycling?: boolean
        ) => boolean
        onMoveFocus?: (node: Gtk.Widget, direction?: Gtk.DirectionType) => void
        onQueryTooltip?: (
          node: Gtk.Widget,
          x?: number,
          y?: number,
          keyboardMode?: boolean,
          tooltip?: Gtk.Tooltip
        ) => boolean
        onRealize?: (node: Gtk.Widget) => void
        onShow?: (node: Gtk.Widget) => void
        onStateFlagsChanged?: (node: Gtk.Widget, flags?: Gtk.StateFlags) => void
        onUnmap?: (node: Gtk.Widget) => void
        onUnrealize?: (node: Gtk.Widget) => void
        onNotifyCanFocus?: (node: Gtk.Widget) => void
        onNotifyCanTarget?: (node: Gtk.Widget) => void
        onNotifyCssClasses?: (node: Gtk.Widget) => void
        onNotifyCssName?: (node: Gtk.Widget) => void
        onNotifyCursor?: (node: Gtk.Widget) => void
        onNotifyFocusOnClick?: (node: Gtk.Widget) => void
        onNotifyFocusable?: (node: Gtk.Widget) => void
        onNotifyHalign?: (node: Gtk.Widget) => void
        onNotifyHasDefault?: (node: Gtk.Widget) => void
        onNotifyHasFocus?: (node: Gtk.Widget) => void
        onNotifyHasTooltip?: (node: Gtk.Widget) => void
        onNotifyHeightRequest?: (node: Gtk.Widget) => void
        onNotifyHexpand?: (node: Gtk.Widget) => void
        onNotifyHexpandSet?: (node: Gtk.Widget) => void
        onNotifyLayoutManager?: (node: Gtk.Widget) => void
        onNotifyMarginBottom?: (node: Gtk.Widget) => void
        onNotifyMarginEnd?: (node: Gtk.Widget) => void
        onNotifyMarginStart?: (node: Gtk.Widget) => void
        onNotifyMarginTop?: (node: Gtk.Widget) => void
        onNotifyName?: (node: Gtk.Widget) => void
        onNotifyOpacity?: (node: Gtk.Widget) => void
        onNotifyOverflow?: (node: Gtk.Widget) => void
        onNotifyParent?: (node: Gtk.Widget) => void
        onNotifyReceivesDefault?: (node: Gtk.Widget) => void
        onNotifyRoot?: (node: Gtk.Widget) => void
        onNotifyScaleFactor?: (node: Gtk.Widget) => void
        onNotifySensitive?: (node: Gtk.Widget) => void
        onNotifyTooltipMarkup?: (node: Gtk.Widget) => void
        onNotifyTooltipText?: (node: Gtk.Widget) => void
        onNotifyValign?: (node: Gtk.Widget) => void
        onNotifyVexpand?: (node: Gtk.Widget) => void
        onNotifyVexpandSet?: (node: Gtk.Widget) => void
        onNotifyVisible?: (node: Gtk.Widget) => void
        onNotifyWidthRequest?: (node: Gtk.Widget) => void
        onNotifyAccessibleRole?: (node: Gtk.Widget) => void
      }
      Window: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Window>
        application?: Gtk.Application
        child?: Gtk.Widget
        decorated?: boolean
        defaultHeight?: number
        defaultWidget?: Gtk.Widget
        defaultWidth?: number
        deletable?: boolean
        destroyWithParent?: boolean
        display?: Gdk.Display
        focusVisible?: boolean
        focusWidget?: Gtk.Widget
        fullscreened?: boolean
        handleMenubarAccel?: boolean
        hideOnClose?: boolean
        iconName?: string
        maximized?: boolean
        mnemonicsVisible?: boolean
        modal?: boolean
        resizable?: boolean
        startupId?: string
        title?: string
        titlebar?: Gtk.Widget
        transientFor?: Gtk.Window
        accessibleRole?: Gtk.AccessibleRole
        onActivateDefault?: (node: Gtk.Window) => void
        onActivateFocus?: (node: Gtk.Window) => void
        onCloseRequest?: (node: Gtk.Window) => boolean
        onEnableDebugging?: (node: Gtk.Window, toggle?: boolean) => boolean
        onKeysChanged?: (node: Gtk.Window) => void
        onNotifyApplication?: (node: Gtk.Window) => void
        onNotifyChild?: (node: Gtk.Window) => void
        onNotifyDecorated?: (node: Gtk.Window) => void
        onNotifyDefaultHeight?: (node: Gtk.Window) => void
        onNotifyDefaultWidget?: (node: Gtk.Window) => void
        onNotifyDefaultWidth?: (node: Gtk.Window) => void
        onNotifyDeletable?: (node: Gtk.Window) => void
        onNotifyDestroyWithParent?: (node: Gtk.Window) => void
        onNotifyDisplay?: (node: Gtk.Window) => void
        onNotifyFocusVisible?: (node: Gtk.Window) => void
        onNotifyFocusWidget?: (node: Gtk.Window) => void
        onNotifyFullscreened?: (node: Gtk.Window) => void
        onNotifyHandleMenubarAccel?: (node: Gtk.Window) => void
        onNotifyHideOnClose?: (node: Gtk.Window) => void
        onNotifyIconName?: (node: Gtk.Window) => void
        onNotifyIsActive?: (node: Gtk.Window) => void
        onNotifyMaximized?: (node: Gtk.Window) => void
        onNotifyMnemonicsVisible?: (node: Gtk.Window) => void
        onNotifyModal?: (node: Gtk.Window) => void
        onNotifyResizable?: (node: Gtk.Window) => void
        onNotifyStartupId?: (node: Gtk.Window) => void
        onNotifyTitle?: (node: Gtk.Window) => void
        onNotifyTitlebar?: (node: Gtk.Window) => void
        onNotifyTransientFor?: (node: Gtk.Window) => void
        onNotifyAccessibleRole?: (node: Gtk.Window) => void
      }
      WindowControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowControls>
        decorationLayout?: string
        side?: Gtk.PackType
        accessibleRole?: Gtk.AccessibleRole
        onNotifyDecorationLayout?: (node: Gtk.WindowControls) => void
        onNotifyEmpty?: (node: Gtk.WindowControls) => void
        onNotifySide?: (node: Gtk.WindowControls) => void
        onNotifyAccessibleRole?: (node: Gtk.WindowControls) => void
      }
      WindowHandle: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowHandle>
        child?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChild?: (node: Gtk.WindowHandle) => void
        onNotifyAccessibleRole?: (node: Gtk.WindowHandle) => void
      }
    }
  }
}
