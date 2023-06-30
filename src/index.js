const http = require("http");
const fs = require("fs");
const path = require("path");
const getUsers = () => {
  const filePath = path.join(__dirname, "./data/users.json");
  return fs.readFileSync(filePath);
};

const name = "Stacy";

const server = http.createServer((req, res) => {
  if (req.url === `/?hello=${name}`) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(`Hello, ${name}!\n`);
    res.end();
    return;
  } else if (req.url === "/?hello") {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.write("Enter a name\n");
    res.end();
    return;
  } else if (req.url === "/?users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(getUsers());
    console.log(getUsers());
    return;
  } else if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  } else {
    res.statusCode = 500;
    res.end("ouch");
  }
});

server.listen(3000, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3000/");
});
