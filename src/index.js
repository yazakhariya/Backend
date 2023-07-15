// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const getUsers = () => {
//   const filePath = path.join(__dirname, "./data/users.json");
//   return fs.readFileSync(filePath);
// };

// const server = http.createServer((req, res) => {
//   const searchParams = new URLSearchParams(req.url);

//   for (let [key, value] of searchParams.entries()) {
//     if (key === "/?hello") {
//       if (value) {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.write(`Hello, ${value}!\n`);
//         res.end();
//         return;
//       }
//       res.statusCode = 400;
//       res.setHeader("Content-Type", "text/plain");
//       res.write("Enter a name\n");
//       res.end();
//       return;
//     } else if (key === "/?users") {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "application/json");
//       res.end(getUsers());
//       console.log(getUsers());
//       return;
//     } else if (key === "/") {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/plain");
//       res.end("Hello World\n");
//     } else {
//       res.statusCode = 500;
//       res.end("ouch");
//     }
//   }
// });

// server.listen(3005, () => {
//   console.log("Сервер запущен по адресу http://127.0.0.1:3005/");
// });
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const addressLogger = require("./middlewares/logger");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/myback")
  .catch((error) => handleError(error));

const { PORT = 3005, API_URL = "http://localhost" } = process.env;
app.use(usersRouter);
app.use(booksRouter);
app.use(addressLogger);

app.get("/", (request, response) => {
  response.status(200);
  response.send("Check console");
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
