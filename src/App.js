import React, { Component } from 'react'
import './App.css';
import Contacts from "./Contacts";

class App extends Component {
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this)
  }
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
  };

  addContact(contact){
    console.log(contact);

    const{contacts}= this.state;
    contacts.push(contact);

    this.setState({
      contacts: contacts
    })
  }
  render () {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
