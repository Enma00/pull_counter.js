const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('operations', {
    add: () => ipcRenderer.invoke('operation:add'),
    subtract: () => ipcRenderer.invoke('operation:subtract'),
    reset: () => ipcRenderer.invoke('operation:reset')
});

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle')
});
