import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { alpha } from '@mui/material'

const Black = 900
const Bold = 700
const SemiBold = 600
const Regular = 400
const Poppins = 'Poppins'

let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default : '#000000',
      paper: '#000000',
    },
    primary: {
      main: '#3C80FF', // light, dark
    },
    secondary: {
      main: '#4C49DA',
    },
    success: {
      main: '#21CE33',
    },
    error: {
      main: '#EB3434',
    },
    warning: {
      main: '#E359F9'
    },
    info: {
      main: '#5961F9',
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          overflow-x: hidden;
          font-family: Poppins;
          font-weight: SemiBold;
        }
      `
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1.375, 0),
          backdropFilter: 'blur(16px)',
          background: 'transparent',
          border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: Poppins,
          fontWeight: SemiBold,
        },
        h1: {
          fontWeight: Black,
        },
        h2: {
          fontWeight: Black,
          [theme.breakpoints.up("md")]: {
            fontSize: "72px",
            lineHeight: "82px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "56px",
            lineHeight: "66px",
          },
        },
        h3: {
          fontWeight: Black,
          [theme.breakpoints.up("xs")]: {
            fontSize: "40px",
            lineHeight: "50px",
          },
        },
        h4: {
          fontWeight: SemiBold,
          [theme.breakpoints.up("xs")]: {
            fontSize: "32px",
            lineHeight: "42px",
          },
        },
        h5: {
          fontWeight: Bold,
          [theme.breakpoints.up("xs")]: {
            fontSize: "28px",
            lineHeight: "38px",
          },
        },
        h6: {
          fontWeight: SemiBold,
          [theme.breakpoints.up("xs")]: {
            fontSize: "28px",
            lineHeight: "38px",
          },
        },
        body1: {
          fontWeight: SemiBold,
          [theme.breakpoints.up("xs")]: {
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        body2: {
          fontWeight: Regular,
          [theme.breakpoints.up("xs")]: {
            fontSize: "14px",
            lineHeight: "24px",
          },
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none",
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 48,
          fontFamily: Poppins,
          fontWeight: Regular,
          borderRadius: 42,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.common.white, 0.23),
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: alpha(theme.palette.success.main, 0.6),
              borderWidth: 1,
            },
          },
        },
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.success.main, 0.6),
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.success.main, 0.6),
            borderWidth: 1,
          },
        },
        icon: {
          right: 20,
        },
        select: {
          fontWeight: SemiBold,
          borderRadius: 20,
          paddingLeft: 20,
          "&[aria-expanded=true]": {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottom: 0,
            backgroundColor: theme.palette.secondary.main,
            border: `1px solid ${alpha(theme.palette.success.main, 0.6)}`,
            padding: "11.5px 14px",
            "& ~ fieldset": {
              border: 0,
            },
          }
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: Poppins,
          fontWeight: Bold,
          height: 48,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(86, 28, 209, 0.3) 100%);',
          borderRadius: '32px',
          paddingTop: '10px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-flexContainer": {
            display: 'inline-block',
            border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
            borderRadius: '32px',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.common.white,
          fontFamily: Poppins,
          fontWeight: SemiBold,
          minHeight: '48px',
          lineHeight: 1,
          "&.Mui-selected": {
            color: theme.palette.common.white,
            backgroundColor: alpha(theme.palette.success.main, 0.6),
            borderRadius: '25px',
          },
        },

      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: theme.spacing(4, 0, 0),
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: Poppins,
          fontWeight: SemiBold,
          fontSize: '16px',
          border: '1px solid black',
          padding: '19px 0',
          borderRadius: 999
        },
        colorPrimary: {
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          borderColor: alpha(theme.palette.success.main, 0.6),
        },
        colorError: {
          backgroundColor: alpha(theme.palette.warning.main, 0.1),
          borderColor: theme.palette.error.main,
        },
        colorInfo: {
          backgroundColor: alpha(theme.palette.info.main, 0.1),
          borderColor: theme.palette.info.main,
        },
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          width: '40px',
          height: '40px',
          boxShadow: 'none',
          backgroundColor: alpha(theme.palette.info.main, 0.1),
        },
        primary: {
          border: `1px solid ${alpha(theme.palette.success.main, 0.6)}`,
          "&:hover": {
            backgroundColor: alpha(theme.palette.info.main, 0.1),
          },
        },
        secondary: {
          "&:hover": {
            backgroundColor: alpha(theme.palette.info.main, 0.1),
          },
        },
        info: {
          backgroundColor: 'transparent',
          border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
          "&:hover": {
            backgroundColor: 'transparent',
          }
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        thumb: {
          display: 'none',
        },
        track: {
          borderColor: alpha(theme.palette.success.main, 0.6),
          backgroundColor: alpha(theme.palette.success.main, 0.6),
        },
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingTop: '28px',
          borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: '20px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '20px 40px',
          borderTop: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: Poppins,
          fontWeight: Bold,
          color: theme.palette.common.white,
          textTransform: 'none',
          borderRadius: 9999,
          border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
          boxShadow: 'none'
        },
        outlinedPrimary: {
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            borderColor: alpha(theme.palette.success.main, 0.6),
          },
        },
        containedPrimary: {
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          borderColor: alpha(theme.palette.success.main, 0.6),
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 1),
          },
          "&:disabled": {
            borderColor: theme.palette.grey[Bold],
          },
        },
        sizeSmall: {
          padding: theme.spacing(0.5, 1.675),
          height: 32,
        },
        sizeLarge: {

        },
        sizeMedium: {
          padding: theme.spacing(1.125, 3.5),
          fontSize: 18,
          lineHeight: '28px',
        }
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
