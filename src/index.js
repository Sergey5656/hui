import React from 'react';
import store from './redux/redux-store.js'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());


store.subscribe (() => {
    let state = store.getState();
    renderEntireTree(state);
});