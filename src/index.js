import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { addcharacterById } from './actions'
import { create } from 'istanbul-reports';


const store = createStore(rootReducer);
console.log("check here==>> store", store.getState())
store.subscribe(() => { console.log("change in state is :::", store.getState()) })
store.dispatch(addcharacterById(2))
ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
