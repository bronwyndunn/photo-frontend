import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './StripeProviderForm.css';

class StripeProviderForm extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_live_sWJaTzrAYpYjBB08MgiZ9xSH00U4ESCqEP">
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
