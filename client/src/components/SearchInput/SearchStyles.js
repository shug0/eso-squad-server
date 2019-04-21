import { COLORS } from '../../constants/theme'

const styleSurcharger = (base, styles) => ({
  ...base,
  ...styles
})

export const SearchBarStyles = {
  control: b =>
    styleSurcharger(b, {
      padding: '0.5rem',
      borderRadius: 50
    }),
  indicatorSeparator: b =>
    styleSurcharger(b, {
      width: 0
    }),
  multiValue: b =>
    styleSurcharger(b, {
      padding: '0.3rem',
      borderRadius: 50
    }),
  multiValueLabel: b =>
    styleSurcharger(b, {
      fontSize: '0.8rem'
    }),
  multiValueRemove: b =>
    styleSurcharger(b, {
      borderRadius: 50
    }),
  option: (base, state) => ({
    ...base,
    background: state.isFocused
      ? COLORS.backgroundMedium
      : COLORS.backgroundDark
  }),
  menu: base => ({
    ...base,
    marginTop: 10,
    paddding: 0,
    background: COLORS.backgroundDark
  }),
  menuList: base => ({
    ...base,
    paddding: 0
  })
}

export const ClassicSelectStyles = {
  control: (b, s) =>
    styleSurcharger(b, {
      borderRadius: 12,
      height: 40
    }),
  indicatorSeparator: b =>
    styleSurcharger(b, {
      width: 0
    }),
  option: (base, state) => ({
    ...base,
    color: state.isFocused ? COLORS.textLight : COLORS.textDark,
    background: state.isFocused ? COLORS.primary : COLORS.textLight
  }),
  menu: base => ({
    ...base,
    marginTop: 10,
    paddding: 0,
    background: COLORS.textLight
  })
}

export const ClassicSelectTheme = theme => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: COLORS.primary
  }
})
