import React, { Component } from 'react';
import { Modal, Button, Spin, Skeleton } from 'antd';
import { Query } from 'react-apollo';

import './PlayerPage.css';
import { GET_PHOTO_BY_ID } from '../../queries/player';
import LoadingIcon from '../LoadingIcon';

class PlayerPhotoViewer extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      const { visible, loading, showModal, handleCancel, photoId } = this.props;
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
                  onCancel={handleCancel}
                  width={"80vw"}
                  centered={true}
                  footer={[
                    <Button key="close" onClick={handleCancel}>Close</Button>
                  ]}
                >
                <LoadingIcon />
                <div className='individual-player-photo'><img src={data.getPhotosById[0].image.url} className='team-hero-image'/></div>
                </Modal>
            )
            }}
        </Query>
      </div>
    );
  }
}


export default PlayerPhotoViewer;
