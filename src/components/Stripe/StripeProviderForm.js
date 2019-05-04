import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './StripeProviderForm.css';

class StripeProviderForm extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_JhARL7UVX3wmJd15qcCQ3c2k000DzbQjON">
        <div className="stripe-form">
          <h1>Checkout</h1>
          <Elements>
            <CheckoutForm props={this.props}/>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeProviderForm;
