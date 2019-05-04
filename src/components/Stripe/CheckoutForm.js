import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo';
import jsonwebtoken from 'jsonwebtoken';


export const VERIFY_CHARGE = gql`
    mutation Charge($input: PurchaseInput!) {
    	purchase(input: $input)
    }
`
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};

    this.submit = this.submit.bind(this);
  }

    async submit() {
      try {
          const { token } = await this.props.stripe.createToken({name: "Name"});
          return token.id;
      } catch(er) {return er}
    }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    const { playerState } = this.props.props;
    const { email } = jsonwebtoken.decode(localStorage.getItem('token'));
    const amount = playerState.amount * 32;
    const photoIds = playerState.cartPhotoIds;
    return (
     <ApolloConsumer>
         {client => (
          <div className="checkout">
            <h3>{`${playerState.amount} photos in your cart. Your total is $${amount}.`}</h3>
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button
              className='stripe-button'
              onClick={async () => {
                const { data } = await client.mutate({
                  mutation: VERIFY_CHARGE,
                  variables: { input: {email: email, amount: amount, photoIds: photoIds, token: await this.submit()} }
                })
                console.log(data);
                if (data.purchase === "success") this.setState({complete: true});
              }}
            >
              Complete Purchase
            </button>
          </div>
      )}
       </ApolloConsumer>
    );
  }
}

export default injectStripe(CheckoutForm);
