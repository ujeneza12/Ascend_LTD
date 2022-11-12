
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Homepage from '../src/pages/Homepage';
import Signup from '../src/pages/Signup';
import Search from '../src/pages/Search';
import '../src/index.css';


export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
    
    </BrowserRouter>
  );
}
