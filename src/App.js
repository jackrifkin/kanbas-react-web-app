import Labs from "./Labs";
import './App.css';
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Labs />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;