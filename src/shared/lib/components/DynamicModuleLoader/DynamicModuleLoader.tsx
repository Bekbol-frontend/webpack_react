import {
  IReduxStoreWithManager,
  StateSchemaKeys,
} from "@/app/Providers/StoreProvider/config/stateSchema";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Reducer } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useStore } from "react-redux";

// Type Reducers
// export type Reducers = {
//   [key in StateSchemaKeys]?: Reducer;
// };

// Type Reducers
export type Reducers = Partial<Record<StateSchemaKeys, Reducer>>;

interface IProps {
  children: React.ReactNode;
  reducers: Reducers;
  removeAfterUnmount?: boolean;
}

function DynamicModuleLoader(props: IProps) {
  const { children, reducers, removeAfterUnmount } = props;

  const dispatch = useAppDispatch();
  const store = useStore() as IReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKeys, reducer);
      dispatch({ type: `ADD ${name} REDUCER` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeys);
          dispatch({ type: `REMOVE ${name} REDUCER` });
        });
      }
    };
  }, []);

  return <>{children}</>;
}

export default DynamicModuleLoader;
