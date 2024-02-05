import {applyMiddleware, createStore} from 'redux';
import {RootReducer} from './Reducers/RootReducer';
import {thunk} from 'redux-thunk';

export const store = createStore(RootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
