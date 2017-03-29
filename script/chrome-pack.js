const { exec } = require('shelljs');
const path = require('path');
const fs = require('fs')
const { name, version, description } = require('../package')
const manifestObj = require('../dist/manifest.json');

const pluginCrxOut = path.resolve(__dirname, '../out');
const chromeDist = path.resolve(__dirname, '../dist');
const keyPath = path.resolve(__dirname, './key.pem');
const chromePath = '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome';

// 清理out目录
if (fs.existsSync(pluginCrxOut)) {
    exec(`rm -rf ${pluginCrxOut}/*.*`);
} else {
    exec(`mkdir ${pluginCrxOut}`);
}

// manifest信息修改
manifestObj.name = name;
manifestObj.version = version;
manifestObj.description = description;

fs.writeFileSync(path.resolve(__dirname, '../dist/manifest.json'), JSON.stringify(manifestObj, null, '\t'))
// 生成crx文件
exec(`${chromePath} --pack-extension=${chromeDist} --pack-extension-key=${keyPath}`);
// 移动crx文件到out目录
exec(`mv ${path.resolve(__dirname, '../dist.crx')} ${pluginCrxOut}/${name}.rc.${version}.crx`);
