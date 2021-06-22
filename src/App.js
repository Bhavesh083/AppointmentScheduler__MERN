import React from 'react'
import Appointment from './Appointment';
import Appointment_list from './Appointment_list';
import Header from './Header'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/appointments'>
                 <Header />
                 <Appointment_list /> 
          </Route>
          <Route path='/'>
                 <Header /> 
                 <Appointment />
          </Route>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
