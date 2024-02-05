import {userType} from '../../../Models/Users/Users.models';
import {SET_USERS, USERS_ERROR, USERS_LOADING} from '../../Constants/Constants';

type initialStateType = {
  users: userType[];
  isLoading: boolean;
  error: string;
};

const initialState: initialStateType = {
  users: [],
  isLoading: false,
  error: '',
};

export const userReducer = (
  state = initialState,
  action: any,
): initialStateType => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case SET_USERS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: '',
      };

    case USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
