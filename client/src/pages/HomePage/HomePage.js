import React, { PureComponent } from 'react'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import GroupsList from '../../components/GroupsList/GroupsList'

class HomePage extends PureComponent {
  render () {
    const { user } = this.props

    return (
      <>
        <Header user={user} />
        <SearchInput />
        <GroupsList />
      </>
    )
  }
}

export default HomePage
