const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('node:path');
const fs = require('fs');

let countValue = 0;

ipcMain.handle('operation:add', () => {
    countValue += 1;
    return countValue;
});

ipcMain.handle('operation:subtract', () => {
    countValue -= 1;
    return countValue;
});

ipcMain.handle('operation:reset', (event, name_save) => {
    let existingData;
    try {
        const rawData = fs.readFileSync('data.json');
        existingData = JSON.parse(rawData);
    } catch (error) {
        existingData = [];
    }
    const newData = `${name_save}: ${countValue}`;
    existingData.push(newData);
    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));
    countValue = 0;
    return countValue;
});

ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'light';
    } else {
        nativeTheme.themeSource = 'dark';
    }
    return nativeTheme.shouldUseDarkColors;
});

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('app.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


