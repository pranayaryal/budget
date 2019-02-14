import React from "react";
import "./App.scss";
import Transaction from "./components/Transaction";
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <Route exact path="/" component={Register}/>
            <Route exact path="/transaction" component={Transaction}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/register" component={Register}/>
            <br/>

            <Link to="/transaction" className="button is-primary">Transaction</Link>
            <Link to="/profile" className="button is-primary">Profile</Link>
            <Link to="/login" className="button is-primary">Login</Link>
            <Link to="/register" className="button is-primary">Register</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
