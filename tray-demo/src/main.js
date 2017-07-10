const electron = require('electron');
const path = require('path');

const {app, Menu, Tray} = electron;

app.on('ready', _ => {
    const tray = new Tray(path.join('src', 'favicon.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'cool',
            click: _ => {
                console.log("I'm cool");
            }
        },
        {
            label: 'wash',
            click: _ => {
                console.log("do you want to washt?");
            }
        }
    ]);
    tray.setContextMenu(contextMenu);
    tray.setToolTip('My great app');
});