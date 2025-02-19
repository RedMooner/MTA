const { app, BrowserWindow } = require('electron');
const path = require('path');
const extractIcon = require('./core/icon_extractor');
let mainWindow;


const exePath = path.join(__dirname, 'native', 'iconex', 'IconExtracor.exe');
const param = 'your_string_parameter_here';


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
    });

    mainWindow.loadFile('views/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
 
    

    
    extractIcon(exePath, param)
      .then(stdout => {
        console.log(`stdout: ${stdout}`);
      })
      .catch(error => {
        console.error(error);
      });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});


