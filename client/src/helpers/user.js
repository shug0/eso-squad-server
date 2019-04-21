import Cookies from 'js-cookie'
import {
  USER_CP,
  USER_LVL,
  USER_PSEUDO,
  USER_ROLE
} from '../constants/constants'

export const getCookieUser = () => ({
  pseudo: Cookies.get(USER_PSEUDO),
  role: Cookies.get(USER_ROLE),
  lvl: Cookies.get(USER_LVL),
  cp: Cookies.get(USER_CP)
})

export const setCookieUser = user => {
  Cookies.set(USER_PSEUDO, user.pseudo)
  Cookies.set(USER_ROLE, user.role)
  Cookies.set(USER_LVL, user.lvl)
  Cookies.set(USER_CP, user.cp)
}
