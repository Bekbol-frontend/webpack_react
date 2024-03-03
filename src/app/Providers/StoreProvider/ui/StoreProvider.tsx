import React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

interface IProps {
  children: React.ReactNode;
}

function StoreProvider({ children }: IProps) {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
