import React from 'react';
import Ranj from './Ranj';
import Home from './Home';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Ranj/>} />
        <Route path='/ran' element={<Ranj/>} />
        <Route path='/sign' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/leave' element={<Ranj />} />
      </Routes>
    </Router>
  );
}

export default App;
