import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./assets/theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter></BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
