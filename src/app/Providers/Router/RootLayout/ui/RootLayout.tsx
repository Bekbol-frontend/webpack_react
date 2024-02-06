import { Header } from "@/widgets/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
      <footer>footer</footer>
    </>
  );
}

export default RootLayout;
