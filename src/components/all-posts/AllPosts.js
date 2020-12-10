import React, {Component} from 'react';
import {
  Link,
  Switch,
  Route,
  withRouter
} from "react-router-dom"
import Post from "../post/Post";

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
        <div>
          <Switch>
            <Route path={`${url}/:idd`} render={(props) => {
              let {match: {params: {idd}}} = props
              return <Post id={idd}/>
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(AllPosts);