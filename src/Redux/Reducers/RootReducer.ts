import {combineReducers} from 'redux';
import {userReducer} from './User/user.reducer';

export const RootReducer = combineReducers({
  users: userReducer,
});
