import React, { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import PerCountry from './pages/PerCountry';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from '../src/components/Nav';

function App() {

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const { 
    covid: { 
      covidErrorMessage 
    }, 
    countries: { 
      countriesErrorMessage 
    } 
  } = useSelector((state) => state);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowErrorMessage(false);
  };

  return (
    <BrowserRouter>
        <Nav />
        <Switch>   
            <Route path="/" exact={true} render={() => (<Redirect to="/dashboard" />)} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/por-pais" component={PerCountry} />
        </Switch>
        <Snackbar open={showErrorMessage} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
          {covidErrorMessage ?? countriesErrorMessage}
        </MuiAlert>
      </Snackbar>
    </ BrowserRouter>
  );
}

export default App;
