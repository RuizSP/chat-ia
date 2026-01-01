import { createTheme } from "@mui/material/styles"

export const themeLight = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#d8dfffff",
      dark: "#5074ecff",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#7C3AED",
    },

    error: {
      main: "#DC2626",
    },

    background: {
      default: "#92bbe4ff",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#334155",
    },

    divider: "rgba(15,23,42,0.12)",
  },

  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    subtitle1: {
      color: "#475569",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: "small",
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F8FAFC",
          borderRadius: 12,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          fontWeight: 500,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 16,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid rgba(15,23,42,0.12)",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(15,23,42,0.12)",
        },
      },
    },
  },
})
