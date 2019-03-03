import React, {Component} from 'react';
import * as actions from '../../actions/userActions';
import {connect} from "react-redux";
import Loader from '../Loader/Loader';

class User extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    authUserEmail: '',
    loading: true,
    formToggle: false
  }

  async componentDidMount() {
    if(this.props.auth.isAuth) {
      await this.props.getUser(this.props.match.params.email);
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
    this.props.updateUser(this.state);
  }

  onInputChange = e => this.setState({[e.target.name]: e.target.value})

  render() {

    const {name, email, password, loading, formToggle} = this.state;
    return (
      <div>
        <h3>User Info</h3>
        {loading ? <Loader color='#111' h={15}/> :
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <button onClick={this.onFormToggle}>Redaguoti</button>
          {formToggle ?
            <form onSubmit={this.onFormSubmit}>
              {this.props.users.error !== null ?
                <p>{this.props.users.error}</p> : null}
              <input
                type="text"
                name='name'
                value={name}
                placeholder='Iveskite Varda'
                onChange={this.onInputChange}
              />
              <input
                type="email"
                name='email'
                value={email}
                placeholder='Iveskite el pasta'
                onChange={this.onInputChange}
              />
              <input
                type="password"
                name='password'
                value={password}
                placeholder='Iveskite nauja slaptazodi'
                onChange={this.onInputChange}
              />
              <button>Submit</button>
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