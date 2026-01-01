// import { createTheme } from "@mui/material/styles"

// const theme = createTheme({
//   palette: {
//     mode: "dark",

//     primary: {
//       main: "#F8B195",
//       contrastText: "#355C7D",
//     },

//     secondary: {
//       main: "#F67280",
//       contrastText: "#FFFFFF",
//     },

//     error: {
//       main: "#C06C84",
//     },

//     background: {
//       default: "#355C7D",
//       paper: "#6C5B7B",
//     },

//     text: {
//       primary: "#353535ff",
//       secondary: "#353535ff",
//     },

//     divider: "#C06C84",
//   },

//   typography: {
//     fontFamily: '"Roboto", sans-serif',
//     h1: { color: "#F8B195" },
//     h2: { color: "#F8B195" },
//     subtitle1: { color: "#F67280" },
//   },

//   components: {
//     MuiTextField: {
//       defaultProps: {
//         fullWidth: true,
//         size: "small",
//         variant: "standard",
//       },
//     },

//     MuiDivider: {
//       defaultProps: {
//         variant: "fullWidth",
//       },
//     },

//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: "none",
//           borderRadius: 8,
//         },
//       },
//     },

//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#6C5B7B",
//         },
//       },
//     },

//     MuiDrawer: {
//       styleOverrides: {
//         paper: {
//           backgroundColor: "#355C7D",
//         },
//       },
//     },
//   },
// })

// export default theme

import { createTheme } from "@mui/material/styles"

const theme = createTheme({
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
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
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

export default theme
