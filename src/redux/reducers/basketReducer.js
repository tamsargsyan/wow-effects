import * as actionTypes from "../types/basketTypes";

const initialState = {
  basketModal: false,
  items: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_BASKET_MODAL:
      return {
        ...state,
        basketModal: true,
      };
    case actionTypes.CLOSE_BASKET_MODAL:
      return {
        ...state,
        basketModal: false,
      };
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case actionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default basketReducer;
