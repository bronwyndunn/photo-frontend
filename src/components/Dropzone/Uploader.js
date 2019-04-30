import NavBar from '../NavBar'
import './Dropzone.css'
import { Dropzone } from './'

import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Input, Button } from 'antd';


<<<<<<< HEAD
export const GET_FEATURED = gql`
{
  getFeatured {
  	id
    url
	}
}
`
=======
export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
>>>>>>> Upload large pictures through gql

class Uploader extends Component {
  constructor(props) {
    super(props)

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

    const { orgId, teamId, eventId, acceptedFiles } = this.state

    const photos = {
      files: acceptedFiles,
      orgId,
      teamId,
      eventId
    }

    this.props.client.mutate({
      mutation: ADD_PHOTOS,
      variables: { photos }
    })
  }

  render() {
    return (
      <div className='Uploader'>
        <Dropzone getAcceptedFiles={this.getAcceptedFiles}/>
        <WrappedPhotoUploadForm onChange={this.handleFieldChange} />
        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

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

export default Uploader
