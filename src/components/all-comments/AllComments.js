import React, {Component} from 'react';

class AllComments extends Component {
  state = {comments: []}

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(value => value.json())
      .then(valueAPI => {

        this.setState({comments: valueAPI})
      })
  }

  render() {
    let {comments} = this.state
    return (
      <div>
        {
          comments.map(value => <div key={value.id}>
            {value.id} - {value.email}
          </div>)
        }
      </div>
    );
  }
}

export default AllComments;