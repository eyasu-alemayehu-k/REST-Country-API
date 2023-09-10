import "./App.css";
import Detail from "./Components/Detail";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { useModeContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode] = useModeContext();

  return (
    <Router>
      <div className={` app ${mode ? "dark" : ""}`}>
        <Routes>
          <Route path="/" element={<><Header /> <Home /></>} />
          <Route path="/detail" element={<><Header /> <Detail /></>} />      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
