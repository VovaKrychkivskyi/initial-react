import React, {Component} from 'react';

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
    return (
      <div>
        {
          posts.map(value => <div key = {value.id}>
            {value.title}
          </div> )
        }

      </div>
    );
  }
}

export default AllPosts;