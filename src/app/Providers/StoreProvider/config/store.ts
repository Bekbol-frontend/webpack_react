import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { IStateSchema } from "./stateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";

export const createReduxStore = () => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducer,
  });
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
