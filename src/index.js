import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise-middleware'
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer'


const store = createStore(
    rootReducer,
    applyMiddleware(
        reduxPromise(),thunk
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();