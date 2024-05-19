import React from 'react';
import './App.css';
import AddScenario from './components/AddScenario';
import AddVehicle from './components/AddVehicle';
import AllScenarios from './components/AllScenarios';
import Home from './components/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';
toast.configure();

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div>

          <Routes>
            <Route path='/addscenario' element={<AddScenario />} />
            <Route path='/allscenarios' element={<AllScenarios />} />
            <Route path='/addvehiclesform' element={<AddVehicle />} />
            <Route path='/' element={<Home />} />
            <ToastContainer />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
