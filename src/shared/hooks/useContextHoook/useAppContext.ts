import { IContext } from "@/app/Providers/ContextProvider";
import { AppContext } from "@/app/Providers/ContextProvider/config";
import { useContext } from "react";

export const useAppContext = (): IContext => {
  return useContext(AppContext);
};
