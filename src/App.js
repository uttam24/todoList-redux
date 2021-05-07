import React from 'react';
import {Provider} from "react-redux";
import './App.css';
import store from './store/index';
import Users from './Users';
import Form from './Form';


function App() {
  return (
    <Provider store={store}>
    <div className="container">
        <Form/>
        <Users/>
    </div>
    </Provider>
  )
}

export default App;
