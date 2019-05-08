import { GET_PHOTO_BY_ID } from '../../queries/player'
import './Cart.css'

import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { Card } from 'antd'


class Cart extends Component {
  constructor(props) {
    super(props)

    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleRemoveFromCart(photoId) {
      this.props.removeItemFromCart(photoId);
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    const { props } = this.props
    const ids = props.playerState.cartPhotoIds

    return (
        <div className='cart-wrapper'>
          <Query query={GET_PHOTO_BY_ID} variables={{ ids }}>
            {
              ({ loading, error, data }) => {
                if (error) return <div>{JSON.stringify(data)}</div>
                if (loading) return "Loading..."

                return (
                  <div className='cart-items-wrapper'>
                    {
                      data.getPhotosById.map(photo => {
                        return (
                          <Card
                            style={{ width: 300, margin: '16px 30px 16px 30px' }}
                            cover={<img alt="example" src={photo.image.url} />}
                          />
                        )
                      })
                    }
                  </div>
                )
              }
            }
          </Query>
        </div>
    )
  }
}


export default Cart
