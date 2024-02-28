import { memo, useEffect } from "react";
import { useTheme } from "@/shared/hooks";
import { AppRouter } from "./Providers/Router/AppRouter";

function App() {
  useTheme();

  return <AppRouter />;
}

export default memo(App);
