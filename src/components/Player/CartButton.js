import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';

class CartButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            added: false
        }

    this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        const { handleAddToCart } = this.props;
        this.setState({ added: true })
        this.props.handleAddToCart();
    }

    render() {
        const buttonText = this.state.added ? "Added!" : "Click to add to cart";
        return (
            <div className='cart-button'>
                <Button disabled={this.state.added} type="primary" shape="circle" icon={this.state.added ? "check" : "plus"} onClick={() => this.handleOnClick()}/>
                <h4 className='cart-button-text'>{buttonText}</h4>
            </div>
        );
  }
}

export default CartButton;
