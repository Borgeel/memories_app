import { AUTH } from "../contstants/actionTypes";
import * as api from "../api/index.js";

export const signin = (data, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (data, history) => async (dispatch) => {
  try {
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
