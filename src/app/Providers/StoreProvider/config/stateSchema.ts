import { ICounterSchema } from "@/entities/Counter";
import { IUserSchema } from "@/entities/User";
import { ILoginSchema } from "@/features/AuthUser";
import {
  EnhancedStore,
  ReducersMapObject,
  AnyAction,
  CombinedState,
  Reducer,
} from "@reduxjs/toolkit";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  login?: ILoginSchema;
}

export type StateSchemaKeys = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema | undefined,
    action: AnyAction
  ) => CombinedState<IStateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}
