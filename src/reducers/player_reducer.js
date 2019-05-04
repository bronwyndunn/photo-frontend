import { SET_PLAYER, ADD_ITEM_TO_CART } from '../actions/player';

const initialState = {
  player: "",
  cart: 0
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_PLAYER:
        return Object.assign({}, state, {
            player: action.player
        })
      case ADD_ITEM_TO_CART:
        return Object.assign({}, state, {
            cart: state.cart + 1
        })
      default:
        return state;
  }
}

export default playerReducer;
