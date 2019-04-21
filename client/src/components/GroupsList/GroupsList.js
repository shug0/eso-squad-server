import React, { Component } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import './GroupList.scss'

const recentGroups = [
  {
    eventId: 'fungal-grotto-i'
  },
  {
    eventId: 'ruins-of-mazzatun'
  },
  {
    eventId: 'asylum-sanctorium'
  },
  {
    eventId: 'hel-ra-citadel'
  }
]

class GroupsList extends Component {
  render () {
    return (
      <section className='GroupList'>
        {recentGroups.map(group => (
          <GroupCard
            key={group.eventId}
            eventId={group.eventId}
          />
        ))}
      </section>
    )
  }
}

export default GroupsList
