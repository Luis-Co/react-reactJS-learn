import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Counter from './components/counter';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.css';

//this is the principal component...but i am not rendering it at all...its name it is App
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Counter />, document.getElementById('counter'));

render(<Counters />, document.getElementById('counters'));
