const { contextBridge, ipcRenderer } = require('electron')

/* -------------------------------- Dark Mode ------------------------------- */
contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle')
})

/* ------------------------------ Bouton + / - ------------------------------ */
contextBridge.exposeInMainWorld('operations', {
    add: () => ipcRenderer.invoke('operation:add'),
    subtract: () => ipcRenderer.invoke('operation:subtract')
});