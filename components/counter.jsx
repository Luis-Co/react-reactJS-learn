import React, {Component} from 'react';

class Counter extends Component {
state = {
count: 0,
imageUrl: "https://picsum.photos/200"
};

  render() {
    return( 
    <div>
    <img src={this.state.imageUrl} alt="my land"/>
    <h1>{this.formatCount()}</h1>
    <button className="badge badge-primary m-2">Increment</button>
    </div>
    );
  }

formatCount(){
  const {count } = this.state;

  return this.state.count === 0 ? 'Zero' : this.state.count;
}

}

export default Counter;