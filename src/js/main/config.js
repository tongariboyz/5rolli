/* @flow */
import fs from 'fs';
import path from 'path';

import osHomedir from 'os-homedir';

const configFilePath: string = path.join(osHomedir(), '.5rolli.json');
const defaultConfig = {
  apiToken: '',
  apiKey: '',
  boardUrl: ''
};


/**
 * 設定ファイルから設定を読み込む
 *
 * @return {Promise<Object, Error>}
 */
export function loadConfig(): Promise {
  return new Promise((resolve, reject) => {
    const data = fs.readFileSync(configFilePath, 'utf8');
    if (!data) {
      return resolve(defaultConfig);
    }
    try {
      resolve(Object.assign({}, defaultConfig, JSON.parse(data)));
    } catch (e) {
      reject(e);
    }
  });
}


/**
 * 設定ファイルから設定を保存する
 *
 * @param {Object} config config
 * @return {Promise<Object, Error>}
 */
export function saveConfig(config: Object): Promise {
  return new Promise((resolve, reject) => {
    fs.writeFile(configFilePath, JSON.stringify(config, null, 2), err => {
      if (err) {
        return reject(err);
      }
      try {
        resolve(config);
      } catch (e) {
        reject(e);
      }
    });
  });
}
