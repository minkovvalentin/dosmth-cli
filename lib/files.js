const fs = require('fs');

/**
 * 
 * @param {string} str 
 * @param {object} options 
 */
const replaceStr = (str, options) => {
  /// to do
    fs.readdir('./', (err, files) => {
        files.forEach(file => {
          console.log(file, 'file here');
        });
      });
}

module.exports = {
    replaceStr
}