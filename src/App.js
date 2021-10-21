import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './client/home/Home';
import Invitation1 from './client/invitation_1/Invitation1';
import Product from './client/products/Product';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/products" exact={true} component={Product} />
          
          <Route path="/invitation-1" exact={true} component={Invitation1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
