import React from 'react';
import store, {subscribe} from './redux/state.js'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
subscribe(renderEntireTree);


renderEntireTree(state);