import { createRoot } from "react-dom/client";
import App from "./app/App";
import { AppContextProvider } from "./app/Providers/ContextProvider";
import "./app/styles/main.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
