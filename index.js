const express = require("express");
const port = 8080;
const app = express();
const {
  readNodeV1,
  createNode,
  readCars,
  deleteCarsData,
} = require("./file.js");

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log(req.body, "req.body");
});

// Reading cars
app.get("/cars", (req, res) => {
  const cars = readCars();
  console.log(req.body);
  res.send(cars);
});
// Deleting cars
app.delete("/delete", (req, res) => {
  const deleteCars = deleteCarsData(3);
  return deleteCars;
});

app.get("/users", (req, res) => {
  const users = readNodeV1();
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = createNode({ id: 20, Car: "Ford", "Model Year": 1995 });
  res.send(newUser);
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});

// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   console.log(req.method);
//   const reqURL = req.url;
//   if (reqURL === "/") {
//     res.status = 200;
//     return res.end(
//       "<html><body><h1 style='text-align:center;padding-top:20px'>Hello World</h1></body></html>"
//     );
//   }
//   if (reqURL === "/cars") {
//     return cars(res);
//   }
//   if (reqURL === "/products") {
//     return products(res);
//   } else {
//     res.status = 200;
//     res.end(
//       "<html><body><h1 style='text-align:center;padding-top:20px'>Error page 404</h1></body></html>"
//     );
//   }
// });

// const cars = (res) => {
//   fs.readFile("MOCK_DATA.json", "utf-8", (err, txt) => {
//     if (err) {
//       return console.error(err);
//     }
//     const car = JSON.parse(txt);
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(car));
//   });
// };

// const products = (res) => {
//   fs.readFile("json.json", "utf-8", (err, txt) => {
//     if (err) {
//       return console.error(err);
//     }
//     const product = JSON.parse(txt);
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(product));
//   });
// };

// // const creatUsers = (data) => {
// //   fs.readFile("json.json", "utf-8", (err, json) => {
// //     if (err) {
// //       return console.error(err);
// //     }
// //     const oldData = JSON.parse(json);
// //     const newData = oldData.push(data);
// //     console.log(newData);
// //   });
// // };

// // creatUsers({ id: 1, Car: "Cadillac", "Model Year": 2004 });

// const PORT = 8080;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}/`);
// });
