const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('node:path')

const createWindow = () => {
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
})

win.loadFile('app.html')

/* -------------------------------- Dark Mode ------------------------------- */
ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'light'
    } else {
        nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
})
}

app.whenReady().then(() => {
    createWindow()

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
    app.quit()
}
})

/* ------------------------------ Bouton + / - ------------------------------ */
let countValue = 0;

ipcMain.handle('operation:add', () => {
    countValue += 1;
    return countValue;
});

ipcMain.handle('operation:subtract', () => {
    countValue -= 1;
    return countValue;
});