import React, { Component } from 'react'
import 'client/src/components/Header/Header.scss'
import { FiSettings } from 'react-icons/fi';
import { GiEclipseFlare, GiElfHelmet } from 'react-icons/gi';


class Header extends Component {
  render () {
    const { account } = this.props;

    return (
      <section className="Header">
        <h1 className="Header__title">ESO SQUAD</h1>
        <div className="Header__infos">
          <div className="Header__infos__account">
            @{account}
          </div>

          <div className="Header__infos__cp">
            50 <GiEclipseFlare /> 450
          </div>

          <div className="Header__infos__edit">
            <FiSettings />
          </div>
        </div>
      </section>
    )
  }
}

export default Header
