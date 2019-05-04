import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Card, Avatar, Skeleton, Icon, Button } from 'antd';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { RIPTIDE_TEAM_ID } from '../../utils/constants'
import CartButton from './CartButton';

import './PlayerPage.css';
import PlayerPhotoViewer from './PlayerPhotoViewer';

const { Meta } = Card;


export const GET_PHOTOS_BY_PLAYER = gql`
  query getPhotosByPlayer($playerId: ID!) {
    getPhotosByPlayer(playerId: $playerId) {
        id
        image(spec: { height: 300, width: 300, watermark: true }) {
          url
          height
          width
        }
    }
  }
`

class PlayerPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            visible: false,
            currentPhotoId: ''
        }

        this.showModal = this.showModal.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    showModal(photoId) {
        this.setState({ visible: true, currentPhotoId: photoId })
    }

    handleAddToCart() {
        this.props.addItemToCart();
        this.setState({ visible: false })
    }

    handleCancel() {
        this.setState({ visible: false })
    }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    const { playerState } = this.props;
    const { playerId } = this.props.match.params;
    const { visible, loading, currentPhotoId } = this.state;
    return (
        <div className='player-grid-wrapper'>
          <div className='player-grid-header'>
            <h3 className='player-name'>{playerState.player}</h3>
            <Icon type="shopping-cart" style={{ fontSize: '32px', transform: 'translateY(-6px)' }} theme="outlined" onClick={() => this.props.history.push('/checkout')}/>
            <p>{playerState.cart}</p>

          </div>
          <Query query={GET_PHOTOS_BY_PLAYER} variables={{ playerId: playerId}}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              return(
                  <div className='player-wrapper'>
                    {data.getPhotosByPlayer.map((player) =>
                      <div>
                          <Card
                            style={{ width: 300, margin: '16px 56px 16px 56px' }}
                            cover={<img alt="example" src={player.image.url} onClick={() => this.showModal(player.id)} />}

                          >
                            <CartButton handleAddToCart={this.handleAddToCart}/>
                          </Card>
                      </div>
                    )}
                  </div>
              )
            }}
          </Query>
          <PlayerPhotoViewer visible={visible} loading={loading} showModal={this.showModal}
          handleCancel={this.handleCancel} photoId={currentPhotoId}/>
      </div>
    );
  }
}


export default PlayerPage;
