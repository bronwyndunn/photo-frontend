import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo';

export const VERIFY_CHARGE = gql`
    query Charge($tokenId: ID!) {
    	charge(tokenId: $tokenId)
    }
`
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};

    this.submit = this.submit.bind(this);
  }

    async submit() {
      const { token } = await this.props.stripe.createToken({name: "Name"});
      return token.id;
    }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
     <ApolloConsumer>
         {client => (
          <div className="checkout">
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: VERIFY_CHARGE,
                  variables: { tokenId: await this.submit() }
                })
                console.log(data);
                if (data === "succeeded") this.setState({complete: true});
              }}
            >
              Send
            </button>
          </div>
      )}
       </ApolloConsumer>
    );
  }
}

export default injectStripe(CheckoutForm);
