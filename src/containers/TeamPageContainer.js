import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamPage from '../components/TeamPage';

class TeamPageContainer extends Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
        <div>
            <TeamPage />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    ...state
});
export default connect(mapStateToProps)(TeamPageContainer);
