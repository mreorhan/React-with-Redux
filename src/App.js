import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import {Route} from 'react-router-dom'
import Header from './components/pages/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <Route>
            <Route exact path="/" component={Dashboard}/>
        </Route>
      </div>
    );
  }
}
export default App;
