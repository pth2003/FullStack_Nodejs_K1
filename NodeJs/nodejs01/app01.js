// const http = require("http"); // import thu vien co san
import http from "http";
// const getProduct = require("./modules/product");
import { getProduct } from "./modules/product.js";
getProduct();
const server = http.createServer((req, res) => {
  const path = req.url;
  console.log(req.headers["cookie"]);
  const method = req.method;
  //   console.log(method);
  res.setHeader("abc", "xyz");
  res.setHeader("Content-type", "text/html ; charset=utf-8");
  //   res.setHeader("Set-Cookie", "name=pth;path=/;Max-Age=86400;HttpOnly");
  res.statusCode = 200;
  if (path === "/") {
    res.write("<h1>Hello học nodejs </h1>");
  } else if (path === "/san-pham") {
    res.write("<h1>San pham nodejs </h1>");
  } else {
    res.write("<h1>not found </h1>");
  }

  res.end();
});
server.listen("8080", "localhost", () => {
  console.log("8080 dang chay : http://localhost:8080/ ");
});
// mot so goi co san : http , fs , path
// cac package hay dung cua node
// CommonJs module : sử dụng require
// ES6 module : sử dụng import
