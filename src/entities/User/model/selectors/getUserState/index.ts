import { IStateSchema } from "@/app/Providers/StoreProvider";

export const getUserState = (state: IStateSchema) => state.user;
