import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DDRStates from './context/DDR-States';
import Login from './components/Login';

function App() {
  return (
  <>
    <DDRStates>
        <BrowserRouter>
          <Routes>                
            <Route path="/" element={<Login/>} />
          </Routes>
        </BrowserRouter>
    </DDRStates>
  
  </>
  );
}

export default App;
