import React, { Component } from 'react'
import { SettingsIcon } from '../Icons'
import './Header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    const { user } = this.props

    return (
      <header className='Header'>
        <h1 className='Header__title'>ESO Squad</h1>
        <aside className='Header__infos'>
          <span className='Header__infos__detail'><strong>@</strong>{user.pseudo}</span>
          <span className='Header__infos__detail'>Role <strong>{user.role}</strong></span>
          <span className='Header__infos__detail'>CP <strong>{user.cp}</strong></span>
        </aside>

        <div className='Header__settings'>
          <Link to='/setup'>
            <SettingsIcon />
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
