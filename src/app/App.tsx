import { memo } from "react";
import { useTheme } from "@/shared/hooks";
import { AppRouter } from "./Providers/Router/AppRouter";
import Button from "@/shared/ui/Button/ui/Button";

function App() {
  useTheme();

  return <AppRouter />;
}

export default memo(App);
