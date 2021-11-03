/* eslint-disable quotes */
const http = require("http");
const { Calculadora } = require("./index");

const server = http.createServer();
const port = process.env.SERVER_CALCULATOR || 4000;

http
  .createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
      const queryParams = new URL(req.url, `http://${req.headers.host}`);
      const queryParamsValues = queryParams.searchParams.values();

      const nums = [];
      for (const value of queryParamsValues) {
        nums.push(value);
      }
      console.log(nums[0]);
      console.log(nums[1]);
      const resultOperation = Calculadora(+nums[0], +nums[1]);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(resultOperation);
      if (resultOperation.includes("Error")) {
        server.close();
        process.exit(1);
      }
    }
  })
  .listen(port);

server.on("request", (req, res) => {
  const queryParams = new URL(req.url, `http://${req.headers.host}`);
  const queryParamsValues = queryParams.searchParams.values();

  const nums = [];
  for (const value of queryParamsValues) {
    nums.push(value);
  }

  const resultOperation = Calculadora(nums[0], nums[1]);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(resultOperation);
  // // console.log(resultOperation);
  // if (resultOperation.includes("Error")) {
  //   server.close();
  //   process.exit(1);
  // }
});
