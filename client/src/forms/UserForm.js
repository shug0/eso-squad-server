import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import { userFormValidationSchema } from './schemas'
import Select from '../components/Select/Select'
import { ROLES_INPUT } from '../constants/constants'
import { getCookieUser } from '../helpers/user'

class UserForm extends Component {
  getInitialValue = () => {
    const cookieUser = getCookieUser()
    return {
      pseudo: cookieUser.pseudo || '',
      lvl: cookieUser.lvl || 50,
      cp: cookieUser.cp || 160,
      role: cookieUser.role || ''
    }
  };

  render () {
    const { handleSubmit } = this.props

    return (
      <Formik
        initialValues={this.getInitialValue()}
        validationSchema={userFormValidationSchema}
        onSubmit={handleSubmit}
        render={({ handleSubmit, errors, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className='InputWrapper'>
                <label className='Label' htmlFor='pseudo'>
                  Account Pseudo*
                </label>
                <Field
                  className='Input'
                  type='text'
                  id='pseudo'
                  name='pseudo'
                />
              </div>

              <div className='InputWrapper'>
                <label className='Label' htmlFor='role'>
                  Role*
                </label>
                <Field
                  id='role'
                  name='role'
                  options={ROLES_INPUT}
                  component={Select}
                />
              </div>

              <div className='InputWrapper Row Gap'>
                <span>
                  <label className='Label' htmlFor='lvl'>
                    LVL*
                  </label>
                  <Field className='Input' type='text' id='lvl' name='lvl' />
                </span>

                <span>
                  <label className='Label' htmlFor='cp'>
                    CP
                  </label>
                  <Field className='Input' type='text' id='cp' name='cp' />
                </span>
              </div>

              <button type='submit' className='Button Button--isBig'>
                Submit
              </button>
            </form>
          )
        }}
      />
    )
  }
}

export default UserForm
