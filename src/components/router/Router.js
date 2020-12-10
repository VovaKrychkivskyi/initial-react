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
import AllComments from "../all-comments/AllComments";

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
            <div className="all-div">
              <Link to={`comments`}>Comments</Link>
            </div>
          </div>
          <hr/>

          <div>
            <Switch>
              {/*first way*/}
              <Route path={`/users`}><AllUsers/></Route>

              {/*second way*/}
              <Route path={`/posts`} component={AllPosts}/>

              {/*third way*/}
              <Route path={`/comments`} render={()=>{
                return <AllComments/>
              }}/>
            </Switch>
          </div>


        </div>
      </Routerr>
    );
  }
}

export default Router;