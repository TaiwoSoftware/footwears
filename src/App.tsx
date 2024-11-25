import { Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { AboutPage } from "./components/AboutComponents/AboutPage";
// import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
