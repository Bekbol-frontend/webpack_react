import { useContext } from "react";
import { AppContext } from "./createContext";
import { IContext } from "./AppContextProvider";

export const useAppContext = (): IContext => {
  return useContext(AppContext);
};
