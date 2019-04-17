import React, { Component } from 'react'
import { string, number } from 'prop-types'
import 'client/src/components/Header/Header.scss'
import { getRoleIcon, SettingsIcon } from '../Icons'


class Header extends Component {
  static propTypes = {
    account: string.isRequired,
    cp: number.isRequired,
    role: string.isRequired,
  }

  render () {
    const { account, cp, role } = this.props
    const RoleIcon = getRoleIcon[role]

    return (
      <section className="Header">
        <h1 className="Header__title">ESO SQUAD</h1>
        <div className="Header__infos">
          <div className="Header__infos__account">
            <strong>@</strong>{account}
          </div>

          <div className="Header__infos__detail">
            <strong>CP</strong> {cp}
          </div>

          <div className="Header__infos__detail">
            <RoleIcon /> {role}
          </div>

          <div className="Header__infos__edit">
            <SettingsIcon />
          </div>
        </div>
      </section>
    )
  }
}

export default Header
