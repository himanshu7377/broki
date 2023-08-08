import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import HomePage from './component/HomePage'; 
// Import other components and routes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Define other routes */}
      </Routes>
    </Router>
  );
};

export default App;
