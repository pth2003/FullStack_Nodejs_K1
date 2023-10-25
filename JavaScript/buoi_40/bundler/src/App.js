import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import "./assets/Footer.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import config from "./Config.json";
const { SERVER_API } = config;
console.log(process.env.APP_NAME);
export const App = () => {
  return `
   <div class = "container"> ${Header()}
    <main>
    <h1>Trang Chu F8</h1>
    <hr>
    ${SERVER_API}
    <button class = "btn btn-primary">Dang nhap</button>
    </main>
    ${Footer()}
   </div>
  `;
};
