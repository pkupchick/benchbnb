import ReactDOM from "react-dom";
import React from 'react';
import configureStore from "./store/store";
import Root from "./components/root";
import {signin} from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        debugger;
        // delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.fetchBenches = fetchBenches;
    window.$ = $;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signin = signin;
    // TESTING END

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});