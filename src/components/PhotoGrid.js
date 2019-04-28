import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export const GET_TEAMS = gql`
    {
      getTeams(orgId: 1) {
        id
        name
        thumbnail
        roster
      }
    }
`

class PhotoGrid extends Component {
  render() {
      console.log(this.props);
    return (
        <div>
        <h1>Photo grid</h1>
        <div className="photo-grid">
          <Query query={GET_TEAMS}>
          {({ loading, data }) => !loading && (
            <>

            </>
          )}
          </Query>
          </div>
        </div>
    );
  }
}

export default PhotoGrid;
