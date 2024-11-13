const { get } = require("node:http");

get(process.argv[2], (res) => {
  res.setEncoding("utf8");
  res.on("data", console.log);
});
