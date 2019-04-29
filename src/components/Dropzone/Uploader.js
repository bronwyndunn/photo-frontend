import NavBar from '../NavBar'
import './Dropzone.css'
import { Dropzone } from './'

import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Query, Mutation } from 'react-apollo'
<<<<<<< HEAD
import gql from 'graphql-tag'
import { Form, Input, Button } from 'antd';
=======
import { Button } from 'antd'
import gql from 'graphql-tag'
>>>>>>> f77a9182ef7e71d4fe7351d9e664c3bddf10ba9e


export const GET_FEATURED = gql`
{
  getFeatured {
  	id
    url
	}
}
`

class Uploader extends Component {
  constructor(props) {
    super(props)

<<<<<<< HEAD
    this.state = {
        teamID: null,
        eventID: null,
        orgId: null,
        acceptedFiles: []
    }

    this.getAcceptedFiles = this.getAcceptedFiles.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getAcceptedFiles(filesArray) {
      this.setState({ acceptedFiles: filesArray })
  }

  handleFieldChange(field, value) {
    this.setState({ [field]: value });
  }

  handleSubmit(e) {
      e.preventDefault()
      console.log(this.state);
=======
>>>>>>> f77a9182ef7e71d4fe7351d9e664c3bddf10ba9e
  }

  render() {
    return (
      <div className='Uploader'>
<<<<<<< HEAD
        <Dropzone getAcceptedFiles={this.getAcceptedFiles}/>
        <WrappedPhotoUploadForm onChange={this.handleFieldChange} />
        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>Submit</Button>
=======
        <Dropzone />
>>>>>>> f77a9182ef7e71d4fe7351d9e664c3bddf10ba9e
      </div>
    )
  }
}

<<<<<<< HEAD
class PhotoUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
      }


    handleChange(event, inputType) {
        const text = event.target.value;
        this.props.onChange(inputType, text);
  }

  render() {
    return (
      <Form layout="inline">
        <Form.Item>
            <Input onChange={e => this.handleChange(e, "teamID")} placeholder="teamID" />
        </Form.Item>
        <Form.Item>
            <Input onChange={e => this.handleChange(e, "eventID")} placeholder="eventID" />
        </Form.Item>
        <Form.Item>
            <Input onChange={e => this.handleChange(e, "orgId")} placeholder="orgId" />
        </Form.Item>
      </Form>
    );
  }
}

const WrappedPhotoUploadForm = Form.create({ name: 'horizontal_login' })(PhotoUploadForm);

=======
>>>>>>> f77a9182ef7e71d4fe7351d9e664c3bddf10ba9e
export default Uploader
