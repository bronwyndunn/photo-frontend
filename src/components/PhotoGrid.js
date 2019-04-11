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
    return (
        <div>
        <h1>Photo grid</h1>
        <div className="photo-grid">
          <Query query={GET_TEAMS}>
          {({ loading, data }) => !loading && (
            <>
                {data.getTeams.map((team) =>
                     <Card
                     style={{ width: 300 }}
                     cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                     actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}

                     >
                         <Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title="Card title"
                        />
                        <p>{team.name}</p>
                        <p>{team.thumbnail}</p>
                        <p>{team.roster}</p>

                     </Card>
                 )}
            </>
          )}
          </Query>
          </div>
        </div>
    );
  }
}

export default PhotoGrid;
