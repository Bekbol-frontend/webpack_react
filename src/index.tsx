import { createRoot } from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContextProvider";
import "./styles/main.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
