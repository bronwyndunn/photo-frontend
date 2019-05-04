export const SET_PLAYER = "SET_PLAYER";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

export const setCurrentPlayer = (player) => ({ type: SET_PLAYER, player });
export const addItemToCart = (photoId) => ({ type: ADD_ITEM_TO_CART, photoId });
