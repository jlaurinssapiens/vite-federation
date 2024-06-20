import { createTheme } from "@material-ui/core/styles";
import baseTheme from "./baseTheme";

const blueTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#a8324c",
      additional: "#3793ee",
      background: "#ffffff",
      light: "#d7e0fd",
      dark: "#d46039",
    },
    secondary: {
      main: "#9a62cb",
      background: "#ffffff",
      light: "#ff8b52",
    },
    default: {
      main: "#959595",
      background: "#000000",
      light: "#f5f5f5",
    },
    text: {
      dark: "#000000",
      light: "#ffffff",
    },
    accent: {
      lighter: "#facc15",
      main: "#eab308",
      darker: "#ca8a04",
    },
    header: {
      background: "#001D57",
    },
    sidebar: {
      background: "#00297A",
    },
    selectedSidebar: {
      background: "#2B4D91",
    },
    hoverSelectedSidebar: {
      background: "#ffffff",
    },
    focusedSidebar: {
      background: "#00297A",
    },
    border: {
      color: "#4663F6",
    },
    extras: {
      confirmBackground: "#4caf50",
      settingsContainersBackground: "#e3e8eb",
      propertiesComponentBorderColor: "#ccc",
    },
  },
});

export default blueTheme;
