const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const { nativeImage } = require('electron');
const extractIcon = require('./core/icon_extractor');

let mainWindow;
let currentShortcut = 'CommandOrControl+X';

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

    // Добавляем обводку и полупрозрачность
    mainWindow.setBackgroundColor('#1e1e1e80'); // Полупрозрачный цвет фона
    mainWindow.setOpacity(1); // Полупрозрачность окна
}

ipcMain.on("open-file", function (event, path) {
    const { exec } = require('child_process');
    exec(path);
    mainWindow.hide();
});

ipcMain.on('update-shortcut', (event, newShortcut) => {
    globalShortcut.unregisterAll();
    globalShortcut.register(newShortcut, () => {
        if (mainWindow) {
            if (mainWindow.isVisible()) {
                mainWindow.hide();
            } else {
                mainWindow.show();
            }
        }
    });
    currentShortcut = newShortcut;
});

app.on('ready', () => {
    createWindow();

    // Регистрируем глобальный шорткат
    globalShortcut.register(currentShortcut, () => {
        if (mainWindow) {
            if (mainWindow.isVisible()) {
                mainWindow.hide();
            } else {
                mainWindow.show();
            }
        }
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

app.on('will-quit', () => {
    // Отменяем регистрацию всех глобальных шорткатов при выходе из приложения
    globalShortcut.unregisterAll();
});