import React, {Component} from 'react';
import * as actions from '../../actions/loginActions';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import './Login.scss';

class Login extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    // if(this.props.login.loading) return
    // console.log(this.props.login.errors)
    this.props.onFormSubmit(this.props.login, this.props.history);
  }

  render() {
    const { email, password, errors, loading } = this.props.login;
    const { onInputChange }  = this.props;

    return (
      <div className='Login'>
        <form className='Login-form' onSubmit={this.onFormSubmit}>
          <h2>Please Login to Crud System</h2>
          {errors !== '' ? <p style={{
            color: 'red',
            textAlign: 'center'
          }}>Vartotojas nerastas</p> : null}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder='Vartotojos el. pastas'
            value={email}
            onChange={onInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder='Vartotojo slaptazodis'
            value={password}
            onChange={onInputChange}
          />
          <button>{loading ? <Loader color='#111' h={15}/> : 'Submit'}</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps,actions)(Login);