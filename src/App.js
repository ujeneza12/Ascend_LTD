
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Homeproduct from './pages/Homeproduct';
import Homepage from './pages/Homepage';
import Signup from '../src/pages/Signup';
import Search from '../src/pages/Search';
import '../src/index.css';
import Product from './pages/Product';


export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/Home" element={<Homeproduct />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Product" element={<Product />} />

    </Routes>
    
    </BrowserRouter>
  );
}
