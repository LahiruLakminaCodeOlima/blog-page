import React from 'react';
import BlogPage from './userScreen/BlogPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './userScreen/NotFound';
import AboutUs from './userScreen/AboutUs';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogPage/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
