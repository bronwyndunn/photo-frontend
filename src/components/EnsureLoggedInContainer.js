import React from 'react';
import { connect } from 'react-redux';

const isLoggedIn = true;

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
      console.log("thinggg");
      const token = localStorage.getItem('token') || '';
      console.log(token);

    if (!isLoggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
      console.log("in the thingggggg");
    if (isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state) {
 
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)
