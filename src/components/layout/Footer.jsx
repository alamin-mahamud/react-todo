import React, { Component } from 'react'
import '../../assets/sass/Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <p>{new Date().getFullYear()}&copy; - Alamin</p>
      </div>
    )
  }
}

export default Footer
