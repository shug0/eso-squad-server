import React, { Component } from 'react'
import ReactSelect from 'react-select'
import './SearchInput.scss'
import dungeonsData from '../../constants/data/events.json'
import { SearchBarStyles, ClassicSelectTheme } from './SearchStyles'

const dungeonsOptions = dungeonsData.map(dungeon => ({
  label: dungeon.name,
  value: dungeon.id
}))

class SearchInput extends Component {
  render () {
    return (
      <section className='SearchInput'>
        <ReactSelect
          options={dungeonsOptions}
          isMulti
          placeholder='Select dungeon(s), trial(s)..'
          noOptionsMessage={() => 'No results'}
          styles={SearchBarStyles}
          theme={ClassicSelectTheme}
        />
      </section>
    )
  }
}

export default SearchInput
