const electron = require('electron');
const path = require('path');

const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 800,
        resizable: false,
        frame: false
    });

    mainWindow.openDevTools()

    mainWindow.loadURL(`file://${__dirname}/capture.html`);

    mainWindow.on('close', _ => {
        mainWindow = null;
    });

    globalShortcut.register("Ctrl+Alt+Cmd+D", _ => {
        mainWindow.webContents.send('capture', app.getPath('pictures'));
    });

});