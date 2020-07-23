import { connect } from 'react-redux';
import { makeNewUser, signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => ({
    errors: this.state.errors,
    formType: 'login'
})

const mdp = dispatch => ({
    processForm: formUser => dispatch(signin(formUser))
});

export default connect(msp, mdp)(SessionForm);