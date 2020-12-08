import React, {Component} from 'react';
import SingleUser from "../single-user/SingleUser";

class AllUsers extends Component {

  state = {
    users: [],
    chosenOne: null
  }

  onSelectUser = (id) => {
    let {users} = this.state
    let single = users.find(value => value.id === id)
    this.setState({chosenOne: single})
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(value => value.json())
      .then(usersFromAPI => {
        this.setState({users: usersFromAPI})
      })
  }

  render() {
    let {users, chosenOne} = this.state
    return (
      <div>
        {
          users.map(value =>
            <SingleUser
              item={value}
              onSelectUser={this.onSelectUser}
              key={value.id}
            />)
        }
        {
          chosenOne &&
          <h2>
            <hr/>
            {chosenOne.name} - {chosenOne.phone} - {chosenOne.username}
          </h2>
        }

      </div>
    );
  }
}

export default AllUsers;