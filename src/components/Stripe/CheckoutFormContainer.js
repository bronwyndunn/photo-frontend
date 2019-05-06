import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clearCart } from '../../actions/player';


import StripeProviderForm from './StripeProviderForm';

class CheckoutFormContainer extends Component {
    constructor(props) {
        super(props);
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
});

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeProviderForm);
