import React, { Component } from 'react'
import { connect } from 'react-redux'

// import TeamPage from '../components/TeamPage'

class OranizationContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        HELLLO
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(
  mapStateToProps
)(OranizationContainer)
