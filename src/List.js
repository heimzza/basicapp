import React, { Component } from 'react'
import "./List.css"

class List extends Component {
  render() {
    return (
      <div className='listArea'>
        <input name='filter' id='filter' placeholder={"Filter by name or phone"} />
        <ul className='list'>
            <li>
                <span className='name'>Hamza Susam</span>
                <span className='phone'>05425556922</span>
                <span className='clearFix'></span>
            </li>
            <li>
                <span className='name'>Berat Yavuz</span>
                <span className='phone'>05425556922</span>
                <span className='clearFix'></span>
            </li>
            <li>
                <span className='name'>Hacı Ali Taşkın</span>
                <span className='phone'>05425556922</span>
                <span className='clearFix'></span>
            </li>
        </ul>
      </div>
    )
  }
}

export default List;