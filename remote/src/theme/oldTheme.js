import { createTheme } from '@material-ui/core/styles'

const muiTheme = (colors, direction, isTouchDevice = false, darkMode = false, fontSize = 16) => {
  const theme = createTheme({
    direction,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      error: {
        main: colors.error,
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
        },
      },
    },
    typography: {
      fontSize,
      useNextVariants: true,
      button: {
        fontSize: '1.1875rem',
      },
    },
    overrides: {
      MuiFormHelperText: {
        error: {
          direction: 'rtl',
        },
      },
      MuiButton: {
        root: {
          '&:hover': {
            backgroundColor: 'white',
          },
        },
        containedPrimary: {
          color: 'white',
        },
        text: {
          '&:hover': {
            backgroundColor: 'white',
          },
        },
        textPrimary: {
          '&:hover': {
            backgroundColor: 'white',
          },
        },
        outlinedPrimary: {
          lineHeight: 'unset',
          '&:hover': {
            lineHeight: 'unset',
            backgroundColor: 'white',
          },
        },
      },
      MuiInput: {
        formControl: {
          marginTop: '16px',
        },
        underline: {
          '&:before': {
            '&$disabled': {
              borderBottomStyle: 'solid',
            },
          },
          '&$disabled': {
            '&:before': {
              borderBottomStyle: 'solid ',
            },
          },
        },
      },
    },
  })

  theme.overrides = {
    ...theme.overrides,
    MuiFormLabel: {
      root: {
        color: theme.palette.secondary.main,
        '&$focused': {
          color: theme.palette.primary.main,
        },
      },
    },
    MuiInput: {
      ...theme.overrides.MuiInput,
      underline: {
        ...theme.overrides.MuiInput.underline,
        '&:before': {
          ...theme.overrides.MuiInput.underline['&:before'],
          borderBottomColor: theme.palette.secondary.main,
        },
        '&:after': {
          ...theme.overrides.MuiInput.underline['&:after'],
          borderBottomColor: theme.palette.primary.main,
        },
      },
    },

    MuiButton: {
      ...theme.overrides.MuiButton,
      text: {
        ...theme.overrides.MuiButton.text,
        '&:hover': {
          ...theme.overrides.MuiButton.text['&:hover'],
          color: theme.palette.secondary.main,
        },
      },
      textPrimary: {
        ...theme.overrides.MuiButton.textPrimary,
        color: isTouchDevice ? theme.palette.secondary.main : theme.palette.primary.main,
        '&:hover': {
          ...theme.overrides.MuiButton.textPrimary['&:hover'],
          color: theme.palette.secondary.main,
        },
      },
      colorInherit: {
        ...theme.overrides.MuiButton.colorInherit,
        color: colors.btnSecondary,
      },
      outlinedPrimary: {
        ...theme.overrides.MuiButton.outlinedPrimary,
        border: `2px solid ${theme.palette.primary.main}`,
        '&:hover': {
          ...theme.overrides.MuiButton.outlinedPrimary['&:hover'],
          border: `2px solid ${theme.palette.primary.main}`,
        },
      },
    },
  }
  return theme
}

export default muiTheme
