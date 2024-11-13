const { readdir } = require("node:fs");
const { extname } = require("node:path");

const path = process.argv[2];
const ext = process.argv[3];

readdir(path, (err, list) => {
  if (err) {
    console.error(err);
    return;
  }

  list.filter((f) => extname(f).endsWith(ext)).forEach((f) => console.log(f));
});
