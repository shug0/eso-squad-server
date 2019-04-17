import React, { Component } from 'react'
import './assets/theme.scss'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'

// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:8080')

class App extends Component {
  render () {
    return (
      <>
        <Header
          account={"Shug0o"}
          cp={450}
          role={"DD"}
        />
        <section className="Wrapper">
          <SearchBar />

        </section>
      </>
    )
  }
}

export default App
