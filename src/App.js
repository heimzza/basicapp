import React, { Component } from 'react'
import './App.css';
import Contacts from "./Contacts";

class App extends Component {
  state = {
    contacts:[{
      name:'Hamza',
      phone:"05424648456"
    },
    {
      name:'Hasan',
      phone:"05424648453"
    },
  ]
  }
  render () {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
