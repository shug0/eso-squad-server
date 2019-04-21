import React, { Component } from 'react'
import './GroupCard.scss'
import events from '../../constants/data/eventsMap'
import { PlayersIcons } from '../Icons'
import { COLORS } from '../../constants/theme'

class GroupCard extends Component {
  getImgById = (id) => {
    const path = `${process.env.PUBLIC_URL}/assets/illustrations/low/${id}.jpg`
    return path.replace(/(-i.jpg)|(-ii.jpg)/, '.jpg')
  }

  getHeaderStyles = (url) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundColor: COLORS.backgroundDark
  })

  render () {
    const { eventId } = this.props
    const bgPath = this.getImgById(eventId)
    const bgStyles = this.getHeaderStyles(bgPath)

    return (
      <article className='Card GroupCard'>
        <header className='GroupCard__header' style={bgStyles} >
          <div className='GroupCard__header__filter'>
            <h3 className='GroupCard__header__players'>
              <PlayersIcons />
              2/4
            </h3>
            <h3 className='GroupCard__header__title'>{events[eventId].name}</h3>
          </div>
        </header>
        <div className='GroupCard__content'>
          Veteran
        </div>
      </article>
    )
  }
}

export default GroupCard
