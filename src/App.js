import React, { Component } from 'react';
import CharacterList from './CharacterList';
import SquadStats from './HeroList';
import HeroList from './SquadStats';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log("check here props", this.props)
    return (
      <div className="App">
        <h1>Super Squad !!</h1>
        <div className="col-md-4"><CharacterList /></div>

        <div className="col-md-4"><SquadStats /></div>
        <div className="col-md-4"><HeroList /></div>
      </div>
    )
  }
}

export default App;
