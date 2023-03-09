import React, { Component } from 'react'

export default class Nav1 extends Component {
  render() {
    return (
        <>
        <div>{this.props.data}</div>
        <h1>{this.props.username}</h1>
        </>
      
    )
  }
}
