import React from 'react';
import Greeting from './greeting';
import { signout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
