import { createTheme } from '@material-ui/core/styles'
import Immutable from 'seamless-immutable'

const DEFAULT_THEME = {
  measurements: {
    dialogMinWidth: 400,
  },
  palette: {
    primary: {
      main: '#00376c',
      light: '#45a4ff',
    },
    studioBuilder: {
      primary: {
        main: '#3e63ff',
        additional: '#3793ee',
        background: '#ffffff',
        light: '#d7e0fd',
        dark: '#1731a0',
      },
      secondary: {
        main: '#f25924',
        background: '#ffffff',
        light: '#ff8b52',
      },
      default: {
        main: '#959595',
        background: '#000000',
        light: '#f5f5f5',
      },
      text: {
        dark: '#000000',
        light: '#ffffff',
      },
      extras: {
        confirmBackground: '#4caf50',
        settingsContainersBackground: '#e3e8eb',
        sectionOverlay: '#71d7f7',
      },
    },
  },
  typography: {
    body1: {
      fontFamily: 'inherit',
    },
    subtitle2: {
      fontFamily: 'inherit',
    },
  },
  overrides: {
    MuiMobileStepper: {
      root: {
        fontFamily: 'inherit',
        fontSize: '16px',
        padding: 0,
      },
      dot: {
        width: '5px',
        height: '5px',
        margin: '0 3px',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      containedPrimary: {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
        '&:hover': {
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiFab: {
      root: {
        margin: 4,
      },
    },
    MuiCssBaseline: {
      '@global': {
        '.no-select': {
          userSelect: 'none',
        },
      },
    },
    MuiTableCell: {
      root: {
        fontFamily: 'inherit',
      },
      head: {
        fontFamily: 'inherit',
      },
    },
    MuiInputBase: {
      root: {
        fontFamily: 'inherit',
      },
      input: {
        fontFamily: 'inherit',
      },
    },
  },
}

let theme = createTheme(DEFAULT_THEME)
const getFormTheme = () => theme

const setFormTheme = (newTheme) => {
  if (!newTheme) {
    return
  }

  const darkMode = true

  let newThemeWithCorrectPaletteMode = newTheme
  if (newTheme.palette && newTheme.palette.dark && newTheme.palette.light) {
    newThemeWithCorrectPaletteMode = {
      ...newTheme,
      palette: {
        ...newTheme.palette,
        ...newTheme.palette[darkMode ? 'dark' : 'light'],
      },
    }
  }

  theme = createTheme(Immutable(theme).merge(
    {
      ...newThemeWithCorrectPaletteMode,
      direction: newTheme.language === 'he' ? 'rtl' : 'ltr',
    },
    { deep: true },
  ).asMutable({ deep: true }))
}

export {
  getFormTheme,
  setFormTheme,
}
