import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Whitepaper from "./pages/whitepaper";
import Example from "./pages/Example";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", serif, Helvetica, Arial',
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 800,

    allVariants: {
      color: "#fff",
      overflow: "hidden",
      textAlign: "center",
      fontStyle: "normal",
    },
  },

  palette: {
    primary: {
      main: "#b0721b",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainScreen />} />
          <Route exact path="/whitepaper" element={<Whitepaper />} />
          <Route exact path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
