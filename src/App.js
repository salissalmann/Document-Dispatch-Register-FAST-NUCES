import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DDRStates from './context/DDR-States';
import Login from './components/Login';
import Dashboard from "./components/Dashboard"
import DispatchDocument from './components/DispatchDocument';
import TrackDocument from './components/TrackDocument';
import UpdateDocument from './components/UpdateDocument';
import StudentDocument from './components/StudentDocuments';
function App() {
  return (
  <>
    <DDRStates>
        <BrowserRouter>
          <Routes>                
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/AddDocument" element={<DispatchDocument/>} />
            <Route path="/dashboard/TrackDocument" element={<TrackDocument/>} />
            <Route path="/dashboard/UpdateDocument" element={<UpdateDocument/>} />
            <Route path="/dashboard/ViewStudents" element={<StudentDocument/>} />

          </Routes>
        </BrowserRouter>
    </DDRStates>
  
  </>
  );
}

export default App;
