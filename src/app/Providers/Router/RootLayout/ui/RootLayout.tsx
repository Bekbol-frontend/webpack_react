import { Suspense } from "react";
import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Outlet } from "react-router-dom";
import { clsx } from "@/shared/lib/clsx";
import { useAppContext } from "@/shared/hooks";
import PageLoading from "@/shared/ui/PageLoading";

function RootLayout() {
  const { collapsed } = useAppContext();

  return (
    <Suspense fallback={<PageLoading />}>
      <Header />
      <main className="main-block">
        <Sidebar />
        <div className={clsx(["main-content"], { collapsed })}>
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </Suspense>
  );
}

export default RootLayout;
