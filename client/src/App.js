import React, { Component } from 'react'
import './assets/theme.scss'
import io from 'socket.io-client'
import Header from './components/Header/Header'

// const socket = io.connect('http://localhost:8080')

class App extends Component {
  render () {
    return (
      <>
        <Header
          account={"Shug0o"}
        />
      </>
    )
  }
}

export default App
