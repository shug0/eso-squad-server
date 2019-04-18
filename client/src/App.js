import React, { Component } from 'react'
import './assets/theme.scss'
import Header from './components/Header/Header'
import SearchInput from './components/SearchInput/SearchInput'

// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:8080')

class App extends Component {
  render () {
    return (
      <main className='Wrapper'>
        <Header
          account={'Shug0o'}
          cp={450}
          status={'DD'}
        />
        <SearchInput />
      </main>
    )
  }
}

export default App
