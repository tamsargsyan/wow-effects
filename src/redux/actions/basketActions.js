import * as actionTypes from "../types/basketTypes";

export const openBasketModal = () => ({
  type: actionTypes.OPEN_BASKET_MODAL,
});

export const closeBasketModal = () => ({
  type: actionTypes.CLOSE_BASKET_MODAL,
});

export const addToBasket = item => ({
  type: actionTypes.ADD_TO_BASKET,
  payload: item,
});

export const removeFromBasket = itemId => ({
  type: actionTypes.REMOVE_FROM_BASKET,
  payload: itemId,
});

export const increaseQuantity = itemId => ({
  type: actionTypes.INCREASE_QUANTITY,
  payload: itemId,
});
export const decreaseQuantity = itemId => ({
  type: actionTypes.DECREASE_QUANTITY,
  payload: itemId,
});
export const calculateBasketTotalPrice = () => {
  return {
    type: actionTypes.BASKET_TOTAL_PRICE,
  };
};
