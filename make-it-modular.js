const getFilteredFiles = require("./mymodule");

getFilteredFiles(process.argv[2], process.argv[3], (err, list) => {
  if (err) {
    return console.log("errr!");
  }

  list?.forEach((e) => console.log(e));
});
