import path from 'path';

import {Menu, app, ipcMain} from 'electron';
import CrashReporter from 'crash-reporter';
import BrowserWindow from 'browser-window';

import {loadConfig} from './config';
import ipcTypes from '../common/ipcTypes';


let mainWindow = null;
CrashReporter.start();

/**
 * メイン処理の実行
 */
function run() {
  // XXX: release用のnpm scriptsでuglifyjsによって
  // globalのDEBUG変数は強制的にfalseに変更されてこの代入部分は削除される
  global.DEBUG = true;
  // メイン画面のサイズ
  mainWindow = new BrowserWindow({height: 600, width: 800});
  // 起動 url を指定
  const filePath = path.join(__dirname, 'index.html');
  mainWindow.loadUrl(`file://${filePath}`);

  // デベロッパーツールを表示
  if (DEBUG) {
    mainWindow.toggleDevTools();
  }

  buildMenu();

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // 設定ファイル読み込みリクエストを受けて読み込み結果を別Eventで返す
  // TODO: IPC系は別に切り出したい
  ipcMain.on(ipcTypes.CONFIG_LOAD_REQUEST, ev => {
    loadConfig().then(config => {
      ev.sender.send(ipcTypes.CONFIG_LOADED, config);
    });
  });
}


/**
 * Building Menu
 */
function buildMenu() {
  const name = app.getName();
  const template = [{
    label: name,
    submenu: [{
      label: `About ${name}`,
      selector: 'orderFrontStandardAboutPanel:'
    }, {
      type: 'separator'
    }, {
      accelerator: 'Command+Q',
      click: () => app.quit(),
      label: 'Quit'
    }]
  }, {
    label: 'View',
    submenu: [{
      accelerator: 'Command+R',
      click: (item, focusedWindow) => focusedWindow && focusedWindow.reload(),
      label: 'Reload'
    }]
  }];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}


app.on('ready', () => run());
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
