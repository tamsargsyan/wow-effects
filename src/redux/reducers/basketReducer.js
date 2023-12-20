import * as actionTypes from "../types/basketTypes";

const initialState = {
  basketModal: false,
  items: [],
  totalItemsPrice: 0,
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
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            const updatedItem = {
              ...item,
              quantity: (item.quantity || 1) + 1,
            };
            updatedItem.totalPrice =
              parseFloat(updatedItem.price) * updatedItem.quantity;
            return updatedItem;
          }
          return item;
        });

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const newItemWithQuantity = {
          ...newItem,
          quantity: 1,
          totalPrice: parseFloat(newItem.price) * 1,
        };

        return {
          ...state,
          items: [...state.items, newItemWithQuantity],
        };
      }
    case actionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload) {
            const updatedItem = {
              ...item,
              quantity: (item.quantity || 1) + 1,
              totalPrice: parseFloat(item.price) * ((item.quantity || 1) + 1),
            };
            return updatedItem;
          }
          return item;
        }),
      };
    case actionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload && item.quantity > 0) {
            const updatedItem = {
              ...item,
              quantity: (item.quantity || 1) - 1,
              totalPrice: parseFloat(item.price) * ((item.quantity || 1) - 1),
            };
            return updatedItem;
          }
          return item;
        }),
      };
    case actionTypes.BASKET_TOTAL_PRICE:
      const totalItemsPrice = state.items.reduce((total, item) => {
        return total + (parseFloat(item.totalPrice) || 0);
      }, 0);
      return {
        ...state,
        totalItemsPrice,
      };
    default:
      return state;
  }
};

export default basketReducer;
