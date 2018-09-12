import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import {Route} from 'react-router-dom'
import Header from './components/pages/Header';
import EditLocation from './components/pages/EditLocation';
import AddLocation from './components/pages/AddLocation';
class App extends Component {
  render() {

    return (
      <div className="App">
      <Header/>
            <Route exact path="/" component={Dashboard}/>
            
            <Route exact path="/add" component={AddLocation}/>
            <Route exact path="/location/:_id" component={EditLocation}/>
      </div>
    );
  }
}
export default App;
