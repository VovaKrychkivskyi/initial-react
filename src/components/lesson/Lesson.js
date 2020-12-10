import React, {Component} from 'react';
import './Lesson.css'

class Lesson extends Component {

  render() {

    let {title} = this.props

    return (
      <div className="bg">
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Lesson;