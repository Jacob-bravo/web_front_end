import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Help from "./Pages/Help/Help"
import About from './Pages/About/About';
import Bug from './Pages/Bug_Report/Bug';
import Share from './Pages/Share/Share';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/help" replace />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/bug" element={<Bug />} />
          <Route path="/share" element={<Share />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
