const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('operations', {
    add: () => ipcRenderer.invoke('operation:add'),
    subtract: () => ipcRenderer.invoke('operation:subtract'),
    reset: (name_save) => ipcRenderer.invoke('operation:reset', name_save)
});

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle')
});

