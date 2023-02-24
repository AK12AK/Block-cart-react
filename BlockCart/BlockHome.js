import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BlockHome extends Component {
  render() {
    return (
      <div><Link to='/blockhome/blockcart'><button>Block</button></Link></div>
    )
  }
}

export default BlockHome