import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    neutral: {
      main: "#999999",
    },
  },
  typography: {
    fontFamily: "'Rubik', san-serif",
    h1: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "0.94rem",
    },
    subtitle1: {
      fontSize: "1.25rem",
    },
  },
});

export default theme;
