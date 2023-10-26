import { DefaultLayout } from "./Layouts/Default";
import { HomePage } from "./Pages/Home";
import About from "./Pages/About";
import { Products } from "./Pages/Products";
import { ProductDetail } from "./Pages/ProductDetail";
import { router } from "./Utils/router";
export function App() {
  return router(
    [
      {
        path: "/",
        component: HomePage,
      },
      {
        path: "/gioi-thieu",
        component: About,
      },
      {
        path: "/san-pham",
        component: Products,
      },
      {
        path: "/san-pham/:id",
        component: ProductDetail,
      },
    ],
    DefaultLayout
  );
}
