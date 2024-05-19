// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tips from './pages/Tips';
import MYProfile from './pages/MYProfile';
import ResponsiveAppBar from './pages/Header';
import HebrewLink from './components/loginComp';


function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="tips" element={<Tips />} />
        <Route path="myprofile" element={<MYProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
