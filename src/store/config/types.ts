import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from '@reduxjs/toolkit/react';

import {ordersSliceName, TOrdersSliceState} from '../slices/orders';

export type AppState = {
    [ordersSliceName]: TOrdersSliceState;
};

export type Dispatch = ThunkDispatch<AppState, undefined, AnyAction>;

export type Action<P = void> = P extends void
    ? Readonly<{ type: string }>
    : Readonly<{ type: string; payload: P }>;
