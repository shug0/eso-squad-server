import React, { Component } from 'react'
import {
  ClassicSelectStyles,
  ClassicSelectTheme
} from '../SearchInput/SearchStyles'
import ReactSelect from 'react-select'
import { ROLES_INPUT } from '../../constants/constants'

class Select extends Component {
  render () {
    const { options, field, form } = this.props

    return (
      <ReactSelect
        id={field.name}
        options={options}
        isSearchable={false}
        placeholder={field.placeholder}
        value={ROLES_INPUT.find(item => item.value === field.value)}
        onChange={option => form.setFieldValue(field.name, option.value)}
        styles={ClassicSelectStyles}
        theme={ClassicSelectTheme}
      />
    )
  }
}

export default Select
