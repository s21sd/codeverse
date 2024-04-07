import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import appSlice from "./slices/appSlice";
import compileSlice from "./slices/compileSlice";
import { api } from "./api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        compileSlice,
        appSlice

    },
    middleware: (getDafaultMiddleware) => getDafaultMiddleware().concat(api.middleware)
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;