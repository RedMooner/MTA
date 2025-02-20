const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { nativeImage } = require('electron');
const extractIcon = require('./core/icon_extractor');

let mainWindow;




function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        alwaysOnTop: true,
        transparent: true,
        frame: false,
        center: true,
        movable: false,
        resizable: false,
        maximizable: false,
        minimizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: false,
            enableRemoteModule: false,
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile('views/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });





}


ipcMain.on("open-file",function(event,path){
    const { exec } = require('child_process');
    exec(path)
    mainWindow.hide()
})


app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});
