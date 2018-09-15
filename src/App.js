import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import {Route} from 'react-router-dom'
import Header from './components/pages/Header';
import EditLocation from './components/pages/EditLocation';
import AddLocation from './components/pages/AddLocation';
import Login from './components/pages/Login';
class App extends Component {
  render() {

    return (
      <div className="App">
      <Header/>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/add" component={AddLocation}/>
            <Route exact path="/location/:_id" component={EditLocation}/>
            <Route exact path="/login" component={Login}/>
      </div>
    );
  }
}
export default App;
