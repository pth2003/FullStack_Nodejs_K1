// import express from "express";
import express from "express";
import routerIndex from "./routes/index.js";
import routerUser from "./routes/users.js";
const app = express();
const port = 8080;
// Routing
app.use(routerIndex);
app.use("/users", routerUser);
// Listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
