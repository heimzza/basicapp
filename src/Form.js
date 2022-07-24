import React, { Component } from 'react'

class Form extends Component {
    constructor()
    {
        super();
        this.onChange = this.onChange.bind(this)
    }
    state = {
        name: '',
        phone: ''
    };

    onChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
  render() {
    return (
      <div>
        <form>
            <input name='name' id='name' onChange={this.onChange} value={this.state.name} placeholder='Please type your name' />
            <input name='phone' id='phone' onChange={this.onChange} value={this.state.phone} placeholder='Please type your phone'/>
            <button>Add</button>
        </form>
      </div>
    )
  }
}

export default Form;
