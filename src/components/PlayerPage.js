import React, { Component } from 'react';
import './PlayerPage.css';
import HomeCarousel from './HomeCarousel';
import NavBar from './NavBar';
import { Card, Avatar, Skeleton } from 'antd';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import jsonwebtoken from 'jsonwebtoken';
import { RIPTIDE_TEAM_ID } from '../utils/constants'
import { Query } from 'react-apollo';

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
    }

  render() {
    const { playerId } = this.props.match.params;
    return (
        <div>
          <Query query={GET_PHOTOS_BY_PLAYER} variables={{ playerId: playerId}}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              return(
                  <div className='player-wrapper'>
                    {data.getPhotosByPlayer.map((player) =>
                      <Card
                        style={{ width: 300, margin: '16px 56px 16px 56px' }}
                        cover={<img alt="example" src={player.image.url} />}
                      >
                       <Skeleton loading={player.image.url ? false : true} avatar active>
                        <Meta
                          title={"title"}
                        />
                        </Skeleton>
                      </Card>
                    )}
                  </div>
              )
            }}
          </Query>
      </div>
    );
  }
}


export default PlayerPage;
