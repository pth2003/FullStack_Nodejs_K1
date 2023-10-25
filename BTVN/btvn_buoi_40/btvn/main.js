export const app = document.querySelector("#app");
import { HomePage } from "./src/Pages/Home";
import { DefaultLayout } from "./src/Layouts/Default";
import { render } from "./src/Utils/router";

render(DefaultLayout, app);
