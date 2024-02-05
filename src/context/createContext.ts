import { createContext } from "react";
import { IContext } from "./AppContextProvider";

export const AppContext = createContext<IContext>(null!);
