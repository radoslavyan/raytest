import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Menu from './Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsHomePage from './views/TimeloggerHomePage';
import IndexProjects from './components/Project/IndexProjects';
import IndexTimeregistrations from './components/Timeregistration/IndexTimeregistrations';

function App() {

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const toggleSortOrder = () => {
    setSortOrder(currentSortOrder => currentSortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
      <Routes>
        <Route path="/" element={<ProjectsHomePage />} />
        <Route path="/projects" element={<IndexProjects sortOrder={sortOrder} onToggleSortOrder={toggleSortOrder} />} />
        <Route path="/timeregistrations" element={<IndexTimeregistrations />} />
      </Routes>
      </div>

      <footer className='bd-footer py-5 mt-5 bg-light'>
        <div className='container'>
          <ul className='bd-footer-links'>
            <li>Footer</li>
            <p>e-conomic task</p>
          </ul>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App;