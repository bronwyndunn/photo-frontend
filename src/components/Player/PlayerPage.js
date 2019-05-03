import React, { Component } from 'react';
import './PlayerPage.css';
import { Card, Avatar, Skeleton } from 'antd';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { RIPTIDE_TEAM_ID } from '../../utils/constants'
import { Query } from 'react-apollo';

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
        this.setState({ visible: false })
    }

    handleCancel() {
        this.setState({ visible: false })
    }



  render() {
    const { playerId } = this.props.match.params;
    const { visible, loading, currentPhotoId } = this.state;
    return (
        <div>
          <Query query={GET_PHOTOS_BY_PLAYER} variables={{ playerId: playerId}}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              return(
                  <div className='player-wrapper'>
                    {data.getPhotosByPlayer.map((player) =>
                      <div>
                          <Card
                            style={{ width: 300, margin: '16px 56px 16px 56px' }}
                            cover={<img alt="example" src={player.image.url} />}
                            onClick={() => this.showModal(player.id)}
                          >
                           <Skeleton loading={player.image.url ? false : true} avatar active>
                            <Meta
                              title={"title"}
                            />
                            </Skeleton>
                          </Card>
                      </div>
                    )}
                  </div>
              )
            }}
          </Query>
          <PlayerPhotoViewer visible={visible} loading={loading} showModal={this.showModal}
          handleAddToCart={this.handleAddToCart} handleCancel={this.handleCancel} photoId={currentPhotoId}/>
      </div>
    );
  }
}


export default PlayerPage;
