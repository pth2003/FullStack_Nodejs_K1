// import express from "express";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

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
// Routing
app.use(routerAuth);
app.use(authMiddleware);
app.use(routerIndex);
app.use("/users", routerUser);

// Listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
