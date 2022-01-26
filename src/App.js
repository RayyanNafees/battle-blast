import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
