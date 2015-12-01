/**
 * Create IPC Wrapper
 *
 * @return {Object}
 */
function createIPC() {
  const {ipcRenderer} = window.require('electron');
  return {
    on: (name, callback) => ipcRenderer.on(name, callback),
    send: (name, args) => ipcRenderer.send(name, args)
  };
}
export default createIPC();
