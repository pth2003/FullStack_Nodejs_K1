import Navigo from "navigo";
import { app } from "../../main";
const router = new Navigo("/", { linksSelector: "a", hash: true });

export const render = (content, target) => {
  target.innerHTML = content();
};

export const routers = (list, layout) => {
  list.forEach((item) => {
    router.on(item.path, () => render(list.component, app));
  });
};
