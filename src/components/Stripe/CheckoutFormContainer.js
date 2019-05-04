import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(StripeProviderForm);
