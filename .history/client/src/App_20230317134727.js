import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./assets/theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard, Layout, Product } from "./pages/index";

function App() {
  const { mode } = useSelector((store) => store.theme);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
