const { exec } = require('child_process');
const path = require('path');

function extractIcon(exePath, param) {
  return new Promise((resolve, reject) => {
    exec(`"${exePath}" "${param}"`, (error, stdout, stderr) => {
      if (error) {
        reject(`Ошибка: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
}

module.exports = extractIcon;