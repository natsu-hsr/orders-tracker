import { configureStore } from "@reduxjs/toolkit";
import { ordersSliceName } from "@/store/slices/orders";
import { ordersTableData } from "@/mocks/orders/orders-table-data";
import { appReducer, rootReducer } from "./reducers";

const createInitialState = () => {
  return {
    ...appReducer(undefined, { type: "@@INIT" }),
    [ordersSliceName]: {
      ...appReducer(undefined, { type: "@@INIT" })[ordersSliceName],
      data: ordersTableData,
      allData: ordersTableData,
    },
  };
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: createInitialState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});