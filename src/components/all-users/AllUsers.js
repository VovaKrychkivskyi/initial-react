import React, {Component} from 'react';
import SingleUser from "../single-user/SingleUser";

class AllUsers extends Component {

  state = {
    users: [],
    chosenOne: null,
    chosenOnePost: null
  }

  onSelectUser = (id) => {
    let {users} = this.state
    let single = users.find(value => value.id === id)
    this.setState({chosenOne: single})

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(value => value.json())
      .then(posts => {
        this.setState({chosenOnePost: posts})
      })
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(value => value.json())
      .then(usersFromAPI => {
        this.setState({users: usersFromAPI})
      })
  }

  render() {
    let {users, chosenOne, chosenOnePost} = this.state
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
          <div>
            <hr/>
            Info:
            <h3>
              {chosenOne.name} - {chosenOne.phone} - {chosenOne.username}
            </h3>
          </div>
        }
        {
          chosenOnePost &&
          <div>
            <hr/>
            <div>
              Post:
            </div>
            <h3>
              {chosenOnePost.id} - {chosenOnePost.title}
            </h3>
          </div>
        }
      </div>
    );
  }
}

export default AllUsers;