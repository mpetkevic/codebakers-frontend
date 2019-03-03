import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from './actions/authActions';
import jwt from 'jsonwebtoken';
import './App.scss';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import User from './components/User/User';
import UsersList from './components/UsersList/UsersList';


class App extends Component {
  componentWillMount () {
    //jwt from Ls
    const token = localStorage.getItem('codebakers-crud-system-token');
    if(!token) return;
    //get user from token
    const user = jwt.decode(token);
    this.props.authUser(user);
  }
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/user/:email' component={User}/>
            <Route path='/users' component={UsersList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(App);
