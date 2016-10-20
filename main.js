import { app, BrowserWindow } from 'electron';

let mainWindow = null;


app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, icon:'icon.ico'});
  mainWindow.maximize()
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
