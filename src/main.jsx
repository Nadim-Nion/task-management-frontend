import ReactDOM from "react-dom/client";
import "./index.css";
import BasicRoutes from "./routes/BasicRoutes";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <BasicRoutes />
  </BrowserRouter>
);
