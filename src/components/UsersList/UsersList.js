import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from '../../actions/userActions';
import Loader from '../Loader/Loader'

class UsersList extends Component {
  async componentDidMount() {
    await this.props.getUsers()
  }

  render() {
    const {usersList, loading} = this.props.usersList;
    const list = usersList.length > 0 && usersList.map(user => {
      return (
        <div className='list-item' key={user.id}>{user.name} {user.email}</div>
      )
    })
    return (
      <div>
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