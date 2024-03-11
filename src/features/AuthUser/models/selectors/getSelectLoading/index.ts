import { IStateSchema } from "@/app/Providers/StoreProvider";

export const getSelectLoading = (state: IStateSchema) =>
  state.login?.isLoading || false;
