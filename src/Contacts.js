import React, { Component } from 'react'
import Form from './Form';
import List from './List'
import Proptypes from "prop-types"

class Contacts extends Component {
    static propTypes =
    {
        contacts: Proptypes.array.isRequired,
        addContact: Proptypes.func
    };
  render() {
    return (
      <div>
        <List contacts={this.props.contacts}/>
        <Form addContact={this.props.addContact}/>
      </div>
    )
  }
}

export default Contacts;
