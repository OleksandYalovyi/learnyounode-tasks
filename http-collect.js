const { get } = require("node:http");

get(process.argv[2], (res) => {
  res.setEncoding("utf8");
  let counter = 0;
  let str = "";

  res.on("data", (data) => {
    str += data;
    counter += data.length;
  });

  res.on("end", () => {
    console.log(counter);
    console.log(str);
  });
});
