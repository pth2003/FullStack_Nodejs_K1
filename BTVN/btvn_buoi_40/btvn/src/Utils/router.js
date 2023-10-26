import Navigo from "navigo";
import { Error } from "../Pages/Error";
const app = document.querySelector("#app");
const routerObj = new Navigo("/", { linksSelector: "a", hash: false });

const render = (content, target) => {
  target.innerHTML = content;
};

window.navigate = (path) => {
  routerObj.navigate(path);
};
function renderHtml(defaultLayout, componentPath, params) {
  var html = defaultLayout();
  if (html) {
    html = html.replace(/\{.*\}/g, componentPath(params));
  } else {
    html = componentPath(params);
  }

  return html;
}

const router = (arrayPath, defaultLayout) => {
  if (Array.isArray(arrayPath)) {
    arrayPath.forEach((pathItem) => {
      routerObj.on(pathItem.path, (params) =>
        render(renderHtml(defaultLayout, pathItem.component, params), app)
      );
    });
    routerObj.notFound(() => render(Error(), app));
    routerObj.resolve();
  }
};

export { router, routerObj };
// export const routers = (list, layout) => {
//   list.forEach((item) => {
//     router.on(item.path, () => render(list.component, app));
//   });
// };
