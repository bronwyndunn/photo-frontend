import NavBar from '../NavBar'
import './Dropzone.css'
import { Dropzone } from './'

import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Query, Mutation } from 'react-apollo'
import { Button } from 'antd'
import gql from 'graphql-tag'


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

  }

  render() {
    return (
      <div className='Uploader'>
        <Dropzone />
      </div>
    )
  }
}

export default Uploader
