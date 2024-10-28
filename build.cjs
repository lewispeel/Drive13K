const fs = require('fs');
const path = require('path');

const destPath = path.join(__dirname, 'dist');
fs.rmSync(destPath, { recursive: true, force: true });
fs.mkdirSync(destPath, { recursive: true });

const indexPath = path.join(__dirname, 'index.html');
fs.copyFileSync(indexPath, `${destPath}/index.html`);

const srcPath = path.join(__dirname, 'src');
fs.cpSync(srcPath, `${destPath}/src`, { recursive: true });
