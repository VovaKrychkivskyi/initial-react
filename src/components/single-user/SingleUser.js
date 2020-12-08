import React, {Component} from 'react';

class SingleUser extends Component {
  render() {
    let {item, onSelectUser} = this.props
    return (
      <div>
        <div>
          {item.id} - {item.name} -
          <button onClick={()=>{onSelectUser(item.id)}}>info</button>
          {/*/!*<button onClick={onSelectUser.bind(this, item.id)}>info</button>*!/ ----- old school method*/}
        </div>

      </div>
    );
  }
}

export default SingleUser;