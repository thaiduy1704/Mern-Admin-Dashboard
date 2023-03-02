import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./assets/theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const handleClick()=>{
    mode = 'light'
  }
  

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <button>Change Theme</button>
      </ThemeProvider>
    </div>
  );
}

export default App;
