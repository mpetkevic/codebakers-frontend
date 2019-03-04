import React, {Component} from 'react';
import * as actions from '../../actions/userActions';
import {connect} from "react-redux";
import Loader from '../Loader/Loader';
import './User.scss'

class User extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    authUserEmail: '',
    error: null,
    loading: true,
    formToggle: false
  }

  async componentDidMount() {
    await this.props.getUser(this.props.match.params.email);
    const authUser = this.props.auth.isAuth;

    if(authUser) {
      this.setState({
        name: this.props.users.user.name,
        email: this.props.users.user.email,
        authUserEmail: this.props.auth.email,
        loading: false
      })
    } else {
      this.props.history.push('/');
    }

  }

  onFormToggle = () => {
    this.setState({formToggle: !this.state.formToggle})
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if(this.state.password !== '') {
      this.props.updateUser(this.state, this.props.history);
    } else {
      this.setState({error: 'Please enter password'})
    }
  }

  onInputChange = e => this.setState({[e.target.name]: e.target.value})

  render() {

    const {name, email, password, loading, formToggle, error} = this.state;
    return (
      <div className='User'>
        <h3>User Info</h3>
        {loading ? <Loader color='#111' h={15}/> :
        <div>
          <p><span>Name: </span>{name}</p>
          <p><span>Email: </span>{email}</p>
          <button onClick={this.onFormToggle}>Update</button>
          {formToggle ?
            <form className='Update-form' onSubmit={this.onFormSubmit}>
              {this.props.users.error !== null ?
                <p style={{
                  color: 'red',
                  textAlign: 'center'
                }}>{this.props.users.error}</p> : null}
                {error !== null ?
                <p style={{
                  color: 'red',
                  textAlign: 'center'
                }}>{error}</p> : null
                }
                <label htmlFor='name'>New Name</label>
              <input
                type="text"
                name='name'
                value={name}
                placeholder='Enter Name'
                onChange={this.onInputChange}
              />
              <label htmlFor="email">New Email</label>
              <input
                type="email"
                name='email'
                value={email}
                placeholder='Enter email'
                onChange={this.onInputChange}
              />
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                name='password'
                value={password}
                placeholder='Enter new password'
                onChange={this.onInputChange}
              />
              <button>{loading  ? <Loader color='#111' h={15}/> : 'Update'}</button>
            </form> : null}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    auth: state.auth
  }
}

export default connect(mapStateToProps,actions)(User);