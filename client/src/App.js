import React, { Component } from 'react'
import StartPage from './pages/StartPage/StartPage'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { userFormValidationSchema } from './forms/schemas'
import { getCookieUser } from './helpers/user'

// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:8080')

class App extends Component {
  render () {
    const isValid = userFormValidationSchema.isValidSync(getCookieUser())

    return (
      <Router>
        <main className='Wrapper'>
          <Route
            exact
            path='/'
            render={() =>
              !isValid ? <Redirect to='/setup' /> : <HomePage user={getCookieUser()} />
            }
          />
          <Route path='/setup' component={StartPage} />
        </main>
      </Router>
    )
  }
}

export default App
