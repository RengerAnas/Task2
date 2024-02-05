import {END_POINTS} from '../../../Constants/API.Constants';
import ApiService from '../../../Service/ApiService';
import {SET_USERS, USERS_ERROR, USERS_LOADING} from '../../Constants/Constants';
import {AppDispatch} from '../../store';

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userLoading());
      const res = await ApiService(END_POINTS.users, 'GET');
      dispatch(setUsers(res));
    } catch (error: any) {
      dispatch(userError(error.message));
    }
  };
};

const setUsers = (users: any) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

const userLoading = () => {
  return {
    type: USERS_LOADING,
  };
};

const userError = (error: string) => {
  return {
    type: USERS_ERROR,
    payload: error,
  };
};
