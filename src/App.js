import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AllUsers from "./components/all-users/AllUsers";
import Lesson from "./components/lesson/Lesson";

class App extends Component {

  state = {flag: false}

  test = () => {
    this.setState({flag: !this.state.flag})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Lesson title={`Drill`}/>
          <button onClick={this.test}>click me {this.state.flag.toString()}</button>
          <AllUsers/>
          <Lesson title={`Router`}/>

        </p>
      </div>
    );
  }
}

export default App;
