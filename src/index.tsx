import { createRoot } from "react-dom/client";
import { AppContextProvider } from "./app/Providers/ContextProvider";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./app/Providers/ErrorBoundary";
import StoreProvider from "./app/Providers/StoreProvider";
import "./app/styles/main.scss";

import "@/shared/config/i18n";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
