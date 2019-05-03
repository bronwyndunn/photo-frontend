import React, { Component } from 'react';
import { Modal, Button, Spin, Skeleton } from 'antd';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import './PlayerPage.css';

export const GET_PHOTO_BY_ID = gql`
  query getPhotosById($ids: [ID!]!) {
    getPhotosById(ids: $ids) {
        id
        image(spec: { height: 2000, width: 3000, watermark: true }) {
          url
          height
          width
        }
    }
  }
`

class PlayerPhotoViewer extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      const { visible, loading, showModal, handleAddToCart, handleCancel, photoId } = this.props;
    return (
        <div>
        <Query query={GET_PHOTO_BY_ID} variables={{ ids: [photoId] }}>
            {({ loading, error, data }) => {
                if (error) return <div></div>
                if (loading) return "Loading...";
                return(
                <Modal
                  visible={visible}
                  title="Title"
                  onOk={handleAddToCart}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="close" onClick={this.handleCancel}>Close</Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleAddToCart}>
                      Submit
                    </Button>,
                  ]}
                >
                <div className='team-hero'><img src={data.getPhotosById[0].image.url} className='team-hero-image'/></div>
                </Modal>
            )
            }}
        </Query>
      </div>
    );
  }
}


export default PlayerPhotoViewer;
