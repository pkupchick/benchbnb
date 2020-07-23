import ReactDOM from "react-dom";
import React from 'react';
import configureStore from "./store/store";
import Root from "./components/root";
import {signin} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signin = signin;
    // TESTING END

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});