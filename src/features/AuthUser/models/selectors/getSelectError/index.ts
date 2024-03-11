import { IStateSchema } from "@/app/Providers/StoreProvider";

export const getSelectError = (state: IStateSchema) =>
  state.login?.isError || null;
