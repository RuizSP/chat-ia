import { createTheme } from "@mui/material/styles"

export const themeDark = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#7C9CFF",
      dark: "#1E3A8A",
      contrastText: "#0B0F1A",
    },

    secondary: {
      main: "#8B5CF6",
    },

    error: {
      main: "#EF4444",
    },

    background: {
      default: "#0B0F1A",
      paper: "#111827",
    },

    text: {
      primary: "#E5E7EB",
      secondary: "#9CA3AF",
    },

    divider: "rgba(255,255,255,0.08)",
  },

  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    subtitle1: {
      color: "#9CA3AF",
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
          backgroundColor: "#0F172A",
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
          backgroundColor: "#0F172A",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255,255,255,0.08)",
        },
      },
    },
  },
})
