const fs = require("fs");

const readNodeV1 = () => {
  const json = fs.readFileSync("json.json", "utf-8");
  const data = JSON.parse(json);
  return data;
};

const createNode = (data) => {
  fs.readFile("json.json", "utf-8", (err, json) => {
    const oldData = JSON.parse(json);
    oldData.push(data);
    console.log(data);
    fs.writeFileSync("json.json", JSON.stringify(oldData));
  });
  return data;
};

const readCars = () => {
  const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
  const data = JSON.parse(json);
  return data;

  // fs.readFile("MOCK_DATA.json", "utf-8", (err, json) => {
  //   const data = JSON.parse(json);
  //   console.log(data, "data");
  //   return data;
  // });
};

const deleteCarsData = (id) => {
  const json = fs.readFileSync("MOCK_DATA.json", "utf-8");
  const data = JSON.parse(json);
  const newCarsData = data.filter((cars) => {
    return cars.id !== id;
  });
  fs.writeFileSync("MOCK_DATA.json", JSON.stringify(newCarsData));
  return newCarsData;
};

//   fs.readFile("json.json", "utf-8", (err, txt) => {
//     if (err) {
//       return console.error(err);
//     }
//     const product = JSON.parse(txt);
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(product));
//   });
// };
module.exports = { readNodeV1, createNode, readCars, deleteCarsData };
