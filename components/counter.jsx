import React, {Component} from 'react';

class Counter extends Component {
state = {
count: 0,
imageUrl: "https://picsum.photos/200"
};
//  <img src={this.state.imageUrl} alt="my land"/>

styles= {
fontSize: 15,
fontWeight: "bold"
};

  render() {
const classes = 'badge m-2 badge-';
classes += (this.state.count === 0) ? "warning" : "primary";

    return( 
    <div>   
    <h1 style={this.styles} className={classes}>{this.formatCount()}</h1>
    <button className="btn btn-info btn-sm">Increment</button>
    </div>
    );
  }

formatCount(){
  const {count } = this.state;
  return this.state.count === 0 ? 'Zero' : count;
}

}

export default Counter;