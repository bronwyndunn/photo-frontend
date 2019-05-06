import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './TeamPage.css';
import HomeCarousel from './HomeCarousel';
import NavBar from './NavBar';
import { Card, Avatar } from 'antd';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import jsonwebtoken from 'jsonwebtoken';
import { RIPTIDE_TEAM_ID } from '../utils/constants'
import { GET_PHOTO_BY_ID } from '../queries/player';

import { Query } from 'react-apollo';

const { Meta } = Card;


export const GET_TEAM = gql`
  query getTeam($teamId: ID!) {
    getTeam(teamId: $teamId) {
        id
        name
        thumbnail
        roster {
          id
          name
        }
    }
  }
`

class TeamPage extends Component {
    constructor(props) {
        super(props);

    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    }

  handlePlayerClick(id, player) {
      this.props.setCurrentPlayer(player);
      this.props.history.push(`/player/${id}`);
  }


  render() {
    return (
        <div>
          <Query query={GET_TEAM} variables={{ teamId: RIPTIDE_TEAM_ID}}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              return(
                  <div className='team-wrapper'>
                    <div className='team-hero'><img src={require("../images/riptide_team.JPG")} className='team-hero-image'/></div>
                    <h1 className='team-name'>{data.getTeam.name}</h1>

                    <div className='team-roster-wrapper'>
                        <div className='team-roster'>
                            {data.getTeam.roster.map((player) =>
                              <Card
                                style={{ width: 300, margin: '16px 56px 16px 56px' }}
                                cover={<img alt="example" src={require('../images/lax_profile2.JPG')} />}
                                onClick={() => this.handlePlayerClick(player.id, player.name)}
                              >
                                <Meta
                                  avatar={<Avatar src="https://res-1.cloudinary.com/hireclub/image/upload/c_fill,f_auto,g_north,h_200,q_auto,w_200/nlpxwm4loty0zh77b7hn" />}
                                  title={player.name}
                                />
                              </Card>
                            )}
                        </div>
                    </div>
                  </div>
              )
            }}
          </Query>
      </div>
    );
  }
}


export default withRouter(TeamPage);
