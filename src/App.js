import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 123,
          name: 'Drakula'
        },
        {
          id: 321,
          name: 'Zombie'
        }
      ],
    }
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        {
          monsters.map((monster, index) => <h1 key={ index }>{ monster.name } + { monster.id }</h1>)
        }
      </div>
    )
  }
}

export default App;
