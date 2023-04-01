import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
  SEARCH,
} from "../contstants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
