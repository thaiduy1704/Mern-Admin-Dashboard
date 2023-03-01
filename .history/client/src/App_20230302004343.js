import { CssBaseline, ThemeProvider } from "@mui/material ";
import { createTheme } from "@mui/material";
import { themeSettings } from "./assets/theme";
import { useSelector } from "react-redux";
import second from "react";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
