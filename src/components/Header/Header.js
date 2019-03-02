import React from 'react';
import {connect} from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import * as actions from '../../actions/authActions';
import './Header.scss';

const Header = (props) => {
  const {email, isAuth} = props.auth
  return (
    <div className='Header'>
      <Link className='Header-logo' to='/'>CRUD System</Link>
      <nav>
        <li><NavLink className='nav-item' to={`/user/${email}`}>{email}</NavLink></li>
        <li>{isAuth ? <NavLink className='nav-item' to='/users'>Users List</NavLink> : null}</li>
        <li
          onClick={isAuth ? () => props.removeUser() : null}
        >{isAuth ?
          <NavLink className='nav-item' to='/'>Log Out</NavLink> :
          <NavLink className='nav-item' to='/login'>Log In</NavLink>
        }
        </li>
        <li>{isAuth ? null : <NavLink className='nav-item' to='/register'>Register</NavLink>}</li>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,actions)(Header);