import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Minimalista from "./pages/minimalista";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/uno-minimalista" element={<Minimalista/>} />
      </Routes>
    </Router>
  );
}

export default App;
