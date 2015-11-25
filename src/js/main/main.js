import path from 'path';

import app from 'app';
import CrashReporter from 'crash-reporter';
import BrowserWindow from 'browser-window';


let mainWindow = null;
CrashReporter.start();

app.on('ready', () => {
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
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
