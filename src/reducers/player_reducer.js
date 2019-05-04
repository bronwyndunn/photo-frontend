import { SET_PLAYER, ADD_ITEM_TO_CART } from '../actions/player';

const initialState = {
  player: "",
  amount: 0,
  cartPhotoIds: []
};

const playerReducer = (state = initialState, action) => {
    console.log(state);
  switch (action.type) {
      case SET_PLAYER:
        return Object.assign({}, state, {
            player: action.player,
            cartPhotoIds: state.cartPhotoIds
        })
      case ADD_ITEM_TO_CART:
      console.log(action);
        return {
            ...state,
            amount: state.amount + 1,
            cartPhotoIds: [...state.cartPhotoIds, action.photoId]
        }
      default:
        return state;
  }
}

export default playerReducer;
