const fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data = 1) {
  if (err) {
    console.error(err);
    return;
  }

  //   console.log(data);
  const test = String(Number(data) + 1);

  fs.writeFile("./input.txt", test, function (err, data) {
    if (err) {
      console.err(err);
      return;
    }
    console.log(test, "test");
  });
  const test02 = String(Number(test) + 1);
  fs.writeFile("./input.txt", test02, function () {
    console.log(test02, "test02");
  });
});
