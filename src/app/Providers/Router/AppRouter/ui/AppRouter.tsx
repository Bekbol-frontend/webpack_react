import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { RootLayout } from "../../RootLayout";
import { routeConfig } from "@/shared/config/routeConfig";

function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {Object.values(routeConfig).map((el, index) => (
          <Route
            path={el.path}
            element={el.element}
            key={`${el.path}_${index}`}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default memo(AppRouter);
