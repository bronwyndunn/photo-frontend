import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Home.css';
import HomeCarousel from './HomeCarousel';
import NavBar from './NavBar';
import { Carousel, Typography } from 'antd';
import { Button, Modal } from 'antd';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



const { Title } = Typography;

export const GET_FEATURED = gql`
{
  getFeatured {
  	id
    url
	}
}
`



class Home extends Component {
    constructor(props) {
        super(props);

    this.state = {
        ModalText: 'Enter credentials',
        visible: false,
        confirmLoading: false,
    }

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    }


  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    this.setState({
      ModalText: 'Verifying...',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
      this.props.history.push('/photos');
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }  

  render() {
    const { visible, confirmLoading, ModalText } = this.state;      
    return (
      <div className="App">
      <Query query={GET_FEATURED}>
      {({ loading, data }) => !loading && (
        <>
            <h1>heey</h1>

            <ul>
            {data.getFeatured.map((item) => <li>{item.url}</li>)}
            </ul>
        </>
      )}
      </Query>
            <NavBar />
            <HomeCarousel />
         <Button 
            className="carousel-button" onClick={this.showModal} 
            type="primary" size="large" 
            style={{ position: 'absolute', 
                    top: '70%', 
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                Find your team
        </Button> 
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default Home;