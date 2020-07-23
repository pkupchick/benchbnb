import { connect } from 'react-redux';
import { makeNewUser, signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => ({
    errors: state.errors,
    formType: 'signup'
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(makeNewUser(formUser)),
});

export default connect(msp, mdp)(SessionForm);