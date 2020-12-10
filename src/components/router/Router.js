import React, {Component} from 'react';

import {
  BrowserRouter as Routerr,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AllUsers from "../all-users/AllUsers";
import AllPosts from "../all-posts/AllPosts";
import './Router.css'

class Router extends Component {
  render() {
    return (
      <Routerr>
        <div>
          <div className="all-links">
            <div className="all-div">
              <Link to={`users`}>Users</Link>
            </div>
            <div className="all-div">
              <Link to={`posts`}>Posts</Link>
            </div>
          </div>
          <hr/>

          <div>
            <Switch>
              <Route path={`/users`}>
                <AllUsers/>
              </Route>
              <Route path={`/posts`}>
                <AllPosts/>
              </Route>
            </Switch>
          </div>


        </div>
      </Routerr>
    );
  }
}

export default Router;