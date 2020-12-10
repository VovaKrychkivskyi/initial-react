import React, {Component} from 'react';
import {
  Link,
  withRouter
} from "react-router-dom"

class AllPosts extends Component {
  state = {posts: []}

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(value => value.json())
      .then(postAPI =>
        this.setState({posts: postAPI}))
  }

  render() {
    let {posts} = this.state
    let {match: {url}} = this.props
    return (
      <div>
        {
          posts.map(value => <div key={value.id}>
            {value.title} - <Link to={`${url}/${value.id}`}>deteils</Link>
          </div>)
        }

      </div>
    );
  }
}

export default withRouter(AllPosts);