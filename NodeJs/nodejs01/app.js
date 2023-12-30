// import express from "express";
import express from "express";
import session from "express-session";
import flash from "connect-flash";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import routerIndex from "./routes/index.js";
import routerUser from "./routes/users.js";
import routerAuth from "./routes/auth.js";
import authMiddleware from "./middlewares/auth.middleware.js";
const app = express();
const port = 8080;

// setup template engine
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "layouts/layout.default.ejs");

// parse body
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
); // ho tro nhan du lieu o dang : application/x-www-urlendcode
app.use(bodyParser.json()); // ho tro nhan du lieu o dang :application/json

// Session
app.use(
  session({
    name: "f8_session_id",
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
// Routing
app.use(routerAuth);
app.use(authMiddleware);
app.use(routerIndex);
app.use("/users", routerUser);

// Listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
