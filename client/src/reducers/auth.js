import { AUTH, LOGOUT } from "../contstants/actionTypes";

const initialState = {
  authData: JSON.stringify(localStorage.getItem("profile") || null),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
