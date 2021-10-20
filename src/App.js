import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './client/home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
