import React from 'react';
import { bindActionCreators } from 'redux';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
import { connect } from 'react-redux';
import SigninComponent from '../components/signin.component.jsx';
import SignupComponent from '../components/signup.component.jsx';
import * as userActions from '../actions/user.action';

class LandingComponent extends React.Component{


  constructor() {
    super();
  }

  render() {
    return <SigninComponent {...this.props} />
    // if (this.props.loginOrRegister === 'signin') {

    //   return <SigninComponent {...this.props} />
    // } else {

    //   return <SignupComponent {...this.props} />
    // }
  }
}

function mapStateToProps(state) {
  return {
    loginOrRegister: state.loginOrRegister
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);
