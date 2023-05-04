import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DDRStates from './context/DDR-States';
import Login from './components/Login';
import Dashboard from "./components/Dashboard"

function App() {
  return (
  <>
    <DDRStates>
        <BrowserRouter>
          <Routes>                
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
    </DDRStates>
  
  </>
  );
}

export default App;
