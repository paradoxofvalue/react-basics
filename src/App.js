import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <CardList name="Test">
          {
            monsters.map(monster => <h1 key={ monster.id }>{ monster.name }</h1>)
          }
        </CardList>
      </div>
    )
  }
}

export default App;