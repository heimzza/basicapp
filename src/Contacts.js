import React, { Component } from 'react'
import Form from './Form';
import List from './List'

class Contacts extends Component {
  render() {
    return (
      <div>
        <List contacts={this.props.contacts}/>
        <Form/>
      </div>
    )
  }
}

export default Contacts;
