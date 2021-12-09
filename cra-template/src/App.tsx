import React from 'react';
import './App.css';
import {   BrowserRouter,
  Routes,
  Route } from "react-router-dom";

import Home from "./pages/Home"
import UserDetails from './pages/UserDetails';

function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/UserDetails/:userId"  element={<UserDetails />} />
        </Routes>     
        </BrowserRouter>
   
   
  );
}

export default App;
