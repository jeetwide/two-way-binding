import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: "jitu"
  }

  changeName = (newName) => {
    this.setState({

      name: newName


    })
  }

  changeNamefromInput = (event) => {
    this.setState({

      name: event.target.value


    })
  }
  render() {
    return (
      <div className="App">
        <br /> <br />
        <button onClick={() => this.changeName('lalit=>name change through state anonym')}>Change state using Anonymous Function</button>
        <button onClick={this.changeName.bind(this, 'lalit=>name change through state bind')}>Change state using Bind </button>
        <br /> <br />
        <input type="text" onChange={this.changeNamefromInput} value={this.state.name} />
        <br /> <br />

        <div>{this.state.name}</div>

      </div>
    );
  }
}

export default App;
