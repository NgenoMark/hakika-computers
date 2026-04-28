export default {
  palette: {
    mode: "light",
    primary: {
      main: "#0e63b6",
      dark: "#0a457f",
      light: "#5da9ff",
      contrastText: "#f8fbff",
    },
    secondary: {
      main: "#ff8d24",
      dark: "#d96f08",
      light: "#ffbf70",
      contrastText: "#09111f",
    },
    background: {
      default: "#f4f8fc",
      paper: "#ffffff",
    },
    text: {
      primary: "#102033",
      secondary: "#5d6b7b",
    },
    success: {
      main: "#18a999",
    },
    divider: "rgba(16, 32, 51, 0.09)",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Segoe UI", "Trebuchet MS", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: 0 },
    h2: { fontWeight: 800, letterSpacing: 0 },
    h3: { fontWeight: 700, letterSpacing: 0 },
    h4: { fontWeight: 700, letterSpacing: 0 },
    h5: { fontWeight: 700, letterSpacing: 0 },
    h6: { fontWeight: 700, letterSpacing: 0 },
    button: {
      fontWeight: 700,
      letterSpacing: 0,
      textTransform: "none",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(8, 25, 46, 0.86)",
          backdropFilter: "blur(16px)",
          color: "#f8fbff",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(16, 32, 51, 0.08)",
          boxShadow: "0 18px 40px rgba(16, 32, 51, 0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
};
