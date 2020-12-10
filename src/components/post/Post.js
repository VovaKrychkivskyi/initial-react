import React, {Component} from 'react';
import {
  BrowserRouter as Routerr,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom"

class Post extends Component {

  render() {
    let {id} = this.props
    return (
      <div>
        hello {id}
      </div>
    );
  }
}

export default withRouter(Post);