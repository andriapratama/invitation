import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Invitation1 from './client/invitation_1/Invitation1';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Invitation1}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
