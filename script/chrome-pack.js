const { exec } = require('shelljs');
const path = require('path');
const moment = require('moment');
const appPath = path.resolve(__dirname, '../');
const chromeDist = path.resolve(__dirname, '../dist');
const pluginCrxOut = path.resolve(__dirname, '../out');
const keyPath = path.resolve(__dirname, './key.pem');
const chromePath = '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome';

// 清理out目录并重新生成
exec(`rm -rf ${pluginCrxOut}/*.*`);
// 生成crx文件
console.log(`${chromePath} --pack-extension=${chromeDist} --pack-extension-key=${keyPath}`);
exec(`${chromePath} --pack-extension=${chromeDist} --pack-extension-key=${keyPath}`);
// 移动crx文件到out目录
exec(`mv ${appPath}/dist.crx ${pluginCrxOut}/DRAW_DOM.${moment().format('YYYY.MM.DD.HHmm')}.crx`);
