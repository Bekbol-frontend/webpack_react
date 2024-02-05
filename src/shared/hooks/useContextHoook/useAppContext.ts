import { useContext } from "react";
import { AppContext } from "../../../app/Providers/ContextProvider/config/createContext";
import { IContext } from "../../../app/Providers/ContextProvider/ui/AppContextProvider";

export const useAppContext = (): IContext => {
  return useContext(AppContext);
};
