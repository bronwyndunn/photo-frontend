import { SET_PLAYER, ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART, CLEAR_CART } from '../actions/player';

import { reject, eq } from 'ramda'

const removeItem = (array, item) => array.filter(photo => photo !== item)

const initialState = {
  player: "",
  amount: 0,
  cartPhotoIds: []
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_PLAYER:
        return Object.assign({}, state, {
            player: action.player,
            cartPhotoIds: state.cartPhotoIds
        })
      case ADD_ITEM_TO_CART:
        return {
            ...state,
            amount: state.amount + 1,
            cartPhotoIds: [...state.cartPhotoIds, action.photoId]
        }
      case REMOVE_ITEM_TO_CART:
        const newCartIds = removeItem(state.cartPhotoIds, action.photoId)
        return {
            ...state,
            amount: state.amount - 1,
            cartPhotoIds: newCartIds
        }
      case CLEAR_CART:
        return {
            ...state,
            amount: 0,
            cartPhotoIds: []
        }
      default:
        return state;
  }
}

export default playerReducer;
