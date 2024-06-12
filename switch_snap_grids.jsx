app.beginUndoGroup("Toggle Snap to Grid");

// Snap to Gridメニューコマンドをトグル
app.executeCommand(app.findMenuCommandId("Snap to Grid"));

app.endUndoGroup();
