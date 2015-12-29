/* eslint-disable no-console */
const packager = require('electron-packager');
const pkg = require('../package.json');
const args = require('minimist')(process.argv.slice(2));


(altOpts => {
  const opts = {
    appVersion: pkg.version,
    arch: 'x64',
    asar: true,
    cache: 'build/cache',
    dir: 'build/src',
    name: '5ROLLI',
    out: 'build/bin',
    overwrite: true,
    platform: 'darwin',
    version: '0.36.2'
  };
  packager(Object.assign({}, opts, altOpts), (err, appPath) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Build: ${appPath}`);
    }
  });
})(args);
