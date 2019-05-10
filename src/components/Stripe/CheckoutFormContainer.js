import React, { Component } from 'react';
import { connect } from 'react-redux';

import StripeProviderForm from './StripeProviderForm'
import Cart from './Cart'
import { clearCart, removeItemFromCart } from '../../actions/player'


class CheckoutFormContainer extends Component {
    constructor(props) {
        super(props)
    }


  render() {
    return (
      <div>
        <StripeProviderForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
  removeItemFromCart: (photoId) => dispatch(removeItemFromCart(photoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeProviderForm)
