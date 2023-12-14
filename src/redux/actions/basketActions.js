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

export const updateQuantity = (itemId, newQuantity) => ({
  type: actionTypes.UPDATE_QUANTITY,
  payload: { itemId, newQuantity },
});
