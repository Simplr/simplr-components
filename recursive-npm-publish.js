const fs = require('fs');
const path = require('path');
const process = require('process');
const { exec } = require('child_process');

// Hacky solution but works for now
const updateSize = process.argv[2];
const allowedValues = ['major', 'minor', 'patch'];
if (!updateSize || !allowedValues.includes(updateSize)) {
  console.log('Invalid value');
  return;
}

const readDir = dir =>
  new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(err);
      }
      return resolve(files);
    });
  });

const recursiveRead = async dir => {
  const dirContent = await readDir(dir);
  if (dirContent.includes('package.json')) {
    process.chdir(path.resolve(dir));
    exec(`npm version ${updateSize} && npm publish`);
    process.chdir(path.resolve(path.dirname(require.main.filename)));
  }
  dirContent.forEach(fileOrDir => {
    if (fileOrDir === 'node_modules') {
      return;
    }
    const p = path.resolve(dir, fileOrDir);
    const isDir = fs.statSync(p).isDirectory();
    if (isDir) {
      recursiveRead(`${dir}/${fileOrDir}`);
    }
  });
};

recursiveRead('./lib');
