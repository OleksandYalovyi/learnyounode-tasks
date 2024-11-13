const { readdir } = require("node:fs");
const { extname } = require("node:path");

function getFilteredFiles(dirname, ext, cb) {
  readdir(dirname, (err, list) => {
    if (err) {
      return cb(err);
    }

    cb(
      null,
      list?.filter((f) => extname(f).endsWith(ext))
    );
  });
}

module.exports = getFilteredFiles;
