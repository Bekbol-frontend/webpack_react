import { createContext } from "react";
import { IContext } from "../ui/AppContextProvider";

export const AppContext = createContext<IContext>(null!);
