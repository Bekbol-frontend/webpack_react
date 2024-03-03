import { AboutPage } from "@/pages/About";
import { HomePage } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: routePath.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFound />,
  },
};
