import { Action, combineReducers } from "redux";
import { ordersSliceName, ordersSliceReducer } from "@/store/slices/orders";

const RESET_ACTION_TYPE = "RESET";

export const appReducer = combineReducers({
  [ordersSliceName]: ordersSliceReducer,
});

export const resetStore = () => ({ type: RESET_ACTION_TYPE });

export const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: Action<string>) => {
  if (action.type === RESET_ACTION_TYPE) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};