import React, { Component } from 'react'
import ReactSelect from 'react-select'
import './SearchInput.scss'
import dungeonsData from '../../constants/data/dungeons.json'

const dungeonsOptions = dungeonsData.map(dungeon => ({
  label: dungeon.name,
  value: dungeon.id
}))

const styleSurcharger = (base, styles) => ({
  ...base,
  ...styles
})

class SearchInput extends Component {
  render () {
    return (
      <section className='SearchInput'>
        <ReactSelect
          options={dungeonsOptions}
          isMulti
          placeholder='Select dungeon(s), trial(s)..'
          noOptionsMessage={() => 'No results'}
          styles={{
            control: b => styleSurcharger(b, {
              padding: '0.5rem',
              borderRadius: 50
            }),
            indicatorSeparator: b => styleSurcharger(b, {
              width: 0
            }),
            multiValue: b => styleSurcharger(b, {
              padding: '0.3rem',
              borderRadius: 50
            }),
            multiValueLabel: b => styleSurcharger(b, {
              fontSize: '0.8rem'
            }),
            multiValueRemove: b => styleSurcharger(b, {
              borderRadius: 50
            })
          }}
        />
      </section>
    )
  }
}

export default SearchInput
