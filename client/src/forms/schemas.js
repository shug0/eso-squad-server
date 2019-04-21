import * as Yup from 'yup'
import { ROLES } from '../constants/constants'

export const userFormValidationSchema = Yup.object().shape({
  pseudo: Yup.string()
    .required('Enter your ESO account name')
    .max(40, '🤔'),
  cp: Yup.number()
    .min(0)
    .max(2000),
  lvl: Yup.number()
    .required('Enter your character level')
    .min(1)
    .max(50),
  role: Yup.string()
    .oneOf(ROLES)
    .required('Choose a role please')
})
