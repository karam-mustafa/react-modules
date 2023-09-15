import { FETCH_PRODUCTS } from "../actions/types";

export default function productReducer(state, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload || [],
      };

    default:
      return {
        ...state,
        products: [],
      };
  }
}
