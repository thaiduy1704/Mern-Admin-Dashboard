import { CssBaseline, ThemeProvider } from "@mui/material ";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./assets/theme";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => first, [second]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
