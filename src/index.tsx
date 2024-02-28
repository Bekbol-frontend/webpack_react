import { createRoot } from "react-dom/client";
import { AppContextProvider } from "./app/Providers/ContextProvider";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import "./app/styles/main.scss";

import "@/shared/config/i18n";
import ErrorBoundary from "./app/Providers/ErrorBoundary";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
