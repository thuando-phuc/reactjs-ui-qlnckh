import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Login from './pages/login';
import AdminHome from './pages/admin';
import AdminAccountlist from './pages/admin/account-list';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router basename=''>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        {/* Admin */}
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/accountlist" element={<AdminAccountlist />} />
      
      </Routes>
    </Router>
  </div>
)
