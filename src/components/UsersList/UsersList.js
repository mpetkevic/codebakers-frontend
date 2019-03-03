import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import * as actions from '../../actions/userActions';
import Loader from '../Loader/Loader';
import './UsersList.scss';

class UsersList extends Component {
  async componentDidMount() {
    await this.props.getUsers()
  }

  render() {
    const {usersList, loading} = this.props.usersList;
    const authUser =  this.props.auth.email
    const list = usersList && usersList.map(user => {
      return (
        <div className='list-item' key={user.id}>
          <div>
            <span className='user-info'>{user.name}</span>
            <span className='user-info'>{user.email}</span>
          </div>
          <div>
            {/*<Link className='options' to={`/user/${user.email}`}>Redaguoti</Link>*/}
            {authUser === user.email ? null :
            <span className='options' onClick={()=>this.props.deleteUser(user.email)}>Pasalinti</span>}
          </div>
        </div>
      )
    })
    return (
      <div className='UsersList'>
        <h3>Vartotoju sarasas</h3>
        {loading ? <Loader color='#111' h={30}/> : list}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    usersList: state.users,
    auth: state.auth
  }
}

export default connect(mapStateToProps,actions)(UsersList);