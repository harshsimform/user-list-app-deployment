import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice/UserSlice";
import hoverUserSlice from "./HoverUserSlice/HoverUserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const environment = import.meta.env;

export const store = configureStore({
  reducer: {
    data: userSlice,
    hoverData: hoverUserSlice,
  },
  devTools: environment.VITE_APP_DEVTOOL_MODE,
});

// Getting the State type
export type RootState = ReturnType<typeof store.getState>;
// Getting the Dispatch type
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
