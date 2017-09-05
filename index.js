const electron = require('electron');
const path = require('path');
const app = electron.app;
const nedb = require('nedb');
const appPath = app.getPath('desktop'); // appData
const storePath = appPath + "/Storage";
const leafStore = new nedb({filename:  storePath + '/data-store/leaf-data.db'});

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
// Module to control application life.
global.storePath = storePath;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    var electronScreen = electron.screen;
    var displays = electronScreen.getAllDisplays();
    var externalDisplay = null;
    for (var i in displays) {
        if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
            externalDisplay = displays[i];
            break;
        }
    }

    if (externalDisplay) {
        mainWindow = new BrowserWindow({
            x: externalDisplay.bounds.x,
            y: externalDisplay.bounds.y,
            width: externalDisplay.bounds.width,
            height: externalDisplay.bounds.height
        });
    } else {
        // Create the browser window.
        mainWindow = new BrowserWindow({
            width: 1600,
            height: 900
        });
    }

    mainWindow.maximize(true);

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    // init router;
    leafStore.loadDatabase(function() {
        // and load the index.html of the app.
        mainWindow.loadURL(`file://${__dirname}/index.html#/list-tree`);
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
