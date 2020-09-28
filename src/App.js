import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  search(value) {
    this.setState({searchField: value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={e => this.search(e.target.value)}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;