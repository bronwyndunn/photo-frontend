import NavBar from '../NavBar'
import './Dropzone.css'
import { Dropzone } from './'
=======
import { ReactNativeFile } from 'apollo-upload-client'

import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Query, Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Input, Button } from 'antd';

const ADD_PHOTOS = gql`
  mutation AddPhotos($photos: PhotosInput!) {
    addPhotos(photos: $photos)
  }
`

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

class Uploader extends Component {
  constructor(props) {
    super(props)

    this.state = {
        teamId: null,
        eventId: null,
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
        <Dropzone getAcceptedFiles={ this.getAcceptedFiles }/>
          <WrappedPhotoUploadForm onChange={ this.handleFieldChange } />
          <Button type='primary' htmlType='submit' onClick={ this.handleSubmit }>
            Submit
          </Button>
        <Dropzone />
      </div>
    )
  }
}

class PhotoUploadForm extends Component {
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
      <Form layout='inline'>
        <Form.Item>
            <Input onChange={e => this.handleChange(e, 'teamId')} placeholder='teamID' />
        </Form.Item>
        <Form.Item>
            <Input onChange={e => this.handleChange(e, 'eventId')} placeholder='eventID' />
        </Form.Item>
        <Form.Item>
            <Input onChange={e => this.handleChange(e, 'orgId')} placeholder='orgId' />
        </Form.Item>
      </Form>
    );
  }
}

const WrappedPhotoUploadForm = Form.create({ name: 'horizontal_login' })(PhotoUploadForm);

export default withApollo(Uploader)
