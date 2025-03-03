import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Terms from './pages/legal/Terms';
import Compliance from './pages/legal/Compliance';
import Privacy from './pages/legal/Privacy';
import PLDFT from './pages/legal/PLDFT';

function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(30, 30, 30, 0.9)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/pldft" element={<PLDFT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;