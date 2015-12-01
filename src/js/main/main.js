import path from 'path';

import app from 'app';
import {ipcMain} from 'electron';
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
  // メイン画面のサイズ
  mainWindow = new BrowserWindow({width: 800, height: 600});
  // 起動 url を指定
  const filePath = path.join(__dirname, 'index.html');
  mainWindow.loadUrl(`file://${filePath}`);

  // デベロッパーツールを表示
  mainWindow.toggleDevTools();

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

app.on('ready', () => run());
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
