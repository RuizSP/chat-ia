import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#F8B195",
      contrastText: "#355C7D",
    },

    secondary: {
      main: "#F67280",
      contrastText: "#FFFFFF",
    },

    error: {
      main: "#C06C84",
    },

    background: {
      default: "#355C7D",
      paper: "#6C5B7B",
    },

    text: {
      primary: "#353535ff",
      secondary: "#353535ff",
    },

    divider: "#C06C84",
  },

  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { color: "#F8B195" },
    h2: { color: "#F8B195" },
    subtitle1: { color: "#F67280" },
  },

  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: "small",
        variant: "standard",
      },
    },

    MuiDivider: {
      defaultProps: {
        variant: "fullWidth",
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#6C5B7B",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#355C7D",
        },
      },
    },
  },
})

export default theme
