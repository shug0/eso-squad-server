import React, { Component } from 'react'
import { SettingsIcon } from '../Icons'
import { string, number } from 'prop-types'
import './Header.scss'

class Header extends Component {
  static propTypes = {
    account: string.isRequired,
    cp: number.isRequired,
    status: string.isRequired,
  }

  render () {
    const {
      account,
      cp,
      status
    } = this.props

    return (
      <header className='Header'>
        <h1 className='Header__title'>ESO Squad</h1>
        <aside className='Header__infos'>
          <span className='Header__infos__detail'>@{account}</span>
          <span className='Header__infos__detail'>Role {status}</span>
          <span className='Header__infos__detail'>CP {cp}</span>
        </aside>

        <div className='Header__settings'>
          <SettingsIcon />
        </div>
      </header>
    )
  }
}

export default Header
