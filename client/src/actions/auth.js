import { AUTH } from "../contstants/actionTypes.js";
import * as api from "../api/index.js";

// Action creators for signin and signup
const authSuccess = (data) => ({
  type: AUTH,
  data,
});

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    // Dispatch the authSuccess action with the authentication data
    dispatch(authSuccess(data));

    // Store the authentication data in localStorage
    localStorage.setItem("profile", JSON.stringify(data));

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    // Dispatch the authSuccess action with the authentication data
    dispatch(authSuccess(data));

    // Store the authentication data in localStorage
    localStorage.setItem("profile", JSON.stringify(data));

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
