import React from "react";
import GreetingContainer from './greetings/greeting_container';
import { Route } from 'react-router-dom';
import { LoginFormContainer } from './session/login_form_container';
import { SignupFormContainer } from './session/signup_form_container';
import SessionForm from './session/session_form';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <SessionForm />
  </div>
);

export default App;