// import logo from './logo.svg';
import './App.css';
import React from 'react';
import  './lib/font-awesome/css/all.min.css';
 
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Watchlist } from "./components/Watchlist.jsx";
import { Watched } from "./components/Watched.jsx";
import { Add } from "./components/Add.jsx"; 
import { Home } from "./components/Home.jsx";
import {GlobalProvider} from "./context/GlobalProvider.js";



function App() {
  return (
    
    <GlobalProvider>
      
      <Router>
          <Navbar />
        <Routes>
            
            <Route exact path="/" element={<Home />} />
              

            <Route exact path="/watched" element={<Watched />} />
              

            <Route  exact path="/watchlist" element={<  Watchlist />} />
              

            <Route  exact path="/add" element={<Add />} />
              
        </Routes>

      </Router>

     </GlobalProvider> 

  );
}

export default App;
