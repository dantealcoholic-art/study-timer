const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 420,
    minWidth: 320,
    minHeight: 300,
    frame: false,
    backgroundColor: "#000000",
    title: "Study Timer",
    icon: path.join(__dirname, "icon.png"),
    webPreferences: { contextIsolation: true },
  });
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
