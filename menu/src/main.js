const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  const name = electron.app.getName();
  const template = [
    {
      label: name,
      submenu: [
        {
          label: `About ${name}`,
          click: _ => {
            console.log("tontocomple");
          },
          role: 'about'
        },{
          type: 'separator'
        },{
          label: 'Quit',
          click: _ => {
            app.quit();
          },
          accelerator: 'ctrl+w'
        }
      ]
    },{
      label: 'Actions',
      submenu: [
        {
          label: `action 1`,
        },{
          label: `action 2`
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};

app.on('ready', createWindow);
