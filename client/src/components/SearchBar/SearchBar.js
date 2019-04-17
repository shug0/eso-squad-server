import React, { Component } from 'react'
import './SearchBar.scss'
import ReactSelect from 'react-select'
import { COLORS } from '../../constants/theme'
import dungeonsData from '../../constants/data/dungeons.json'
import { FiSearch } from 'react-icons/fi'

// import { SearchIcon } from '../Icons'
// <SearchIcon className="SearchBar__icon" />

const dungeonsOptions = dungeonsData.map(dungeon => ({
  label: dungeon.name,
  value: dungeon.id
}))

class SearchBar extends Component {
  render () {
    return (
        <ReactSelect
          autoFocus
          isMulti
          placeholder="Select the dungeons, trials.."
          options={dungeonsOptions}
          classNamePrefix="SearchBar"
          noOptionsMessage={() => "Nothing found"}
          styles={{
            container: (base) => ({
              ...base,
              width: 600,
              margin: 'auto',
            }),
            control: (base, state) => ({
              ...base,
              border: 0,
              height: 60,
              padding: '0.5rem 1.5rem 0.5rem 0.5rem',
              boxShadow: state.isFocused ? `0 0 1px 1px ${COLORS.textDark}` : '0',
              background: COLORS.backgroundDark,
            }),
            input: (base) => ({
              ...base,
              color: COLORS.textLight,
            }),
            placeholder: (base) => ({
              ...base,
              color: COLORS.textDark,
            }),
            multiValue: (base) => ({
              ...base,
              padding: 6,
              margin: 5,
              background: COLORS.backgroundMedium,
            }),
            multiValueLabel: (base) => ({
              ...base,
              paddingRight: 7,
              color: COLORS.textLight
            }),
            option: (base, state) => ({
              ...base,
              background: state.isFocused ? COLORS.backgroundMedium : COLORS.backgroundDark
            }),
            menu: (base) => ({
              ...base,
              marginTop: 10,
              paddding: 0,
              background: COLORS.backgroundDark
            }),
            menuList: (base) => ({
              ...base,
              paddding: 0
            }),
            indicatorsContainer: (base) => ({
              ...base,
              fontSize: '1rem'
            }),
            indicatorSeparator: (base) => ({
              ...base,
              width: 0
            })
          }}
          components={{
            DropdownIndicator: FiSearch
          }}
        />
    )
  }
}

export default SearchBar
