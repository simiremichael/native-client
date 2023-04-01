import {configureStore} from "@reduxjs/toolkit";
import propertyReducer from "../services/features/propertySlice";
import userReducer from "../services/features/userSlice";
import { propertyAPI } from "../services/api/propertyAPI";
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import propertySearchReducer from '../services/features/propertySearchSlice';
import buyPropertyReducer from '../services/features/buyPropertySlice';
import rentPropertyReducer from "../services/features/rentPropertySlice";
import propertyDetailReducer from "../services/features/propertyDetailSlice";
import morePropertyReducer from "../services/features/morePropertySlice";
import mapDataReducer from '../services/features/mapSlice'
import newProjectsReducer from '../services/features/projectSlice';
import offplanReducer from '../services/features/offplanSlice';
import commercialReducer from "../services/features/commercialSlice";
import filterReducer from "../services/features/filterSlice"


export const store = configureStore({
    reducer: {
        [propertyAPI.reducerPath]: propertyAPI.reducer,
        userState: userReducer,   
        propertyState: propertyReducer,
        propertySearchState: propertySearchReducer,
        buyPropertyState: buyPropertyReducer,
        rentPropertyState: rentPropertyReducer,
        propertyDetailState: propertyDetailReducer,
        morePropertyState: morePropertyReducer,
        mapDataState: mapDataReducer,
        newProjectsState: newProjectsReducer,
        offplanState: offplanReducer,
        commercialState:commercialReducer,
        filterState: filterReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(propertyAPI.middleware),
})   
// {immutableCheck: false, serializableCheck: false }

export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);
