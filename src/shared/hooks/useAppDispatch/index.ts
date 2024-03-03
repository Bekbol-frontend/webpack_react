import { AppDispatch } from "@/app/Providers/StoreProvider";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
