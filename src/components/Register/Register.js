import React, {Component} from 'react';
import Loader from "../Loader/Loader";
import './Register.scss';
import {connect} from "react-redux";
import * as actions from '../../actions/registerActions'

class Register extends Component {

  onFormSubmit = e => {
    e.preventDefault();
    // if(this.props.login.loading) return;
    this.props.onFormSubmit(this.props.register, this.props.history);
  }

  render() {
    const {name, email,error,loading,password} = this.props.register
    const {onInputChange} = this.props
    return (
      <div className='Register'>
        <form className='Register-form' onSubmit={this.onFormSubmit}>
          <h2>Please Register to Crud System</h2>
          {error !== '' ? <p style={{
            color: 'red',
            textAlign: 'center'
          }}>{error}</p> : null}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder='Enter name'
            value={name}
            onChange={onInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder='Enter email'
            value={email}
            onChange={onInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder='Enter password'
            value={password}
            onChange={onInputChange}
          />
          <button>
            {loading  ? <Loader color='#111' h={15}/> : 'Register'}

          </button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    register: state.register
  }
}

export default connect(mapStateToProps,actions)(Register);