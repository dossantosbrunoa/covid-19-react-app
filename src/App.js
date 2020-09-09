import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import PerCountry from './pages/PerCountry';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Nav from '../src/components/Nav';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Switch>   
            <Route path="/" exact={true} render={() => (<Redirect to="/dashboard" />)} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/por-pais" component={PerCountry} />
        </Switch>
    </ BrowserRouter>
  );
}

export default App;
