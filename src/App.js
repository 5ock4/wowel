import React from 'react';
import NavBar from './components/NavBar'
import Dropzone from './components/Dropzone'

import './App.css';
import ExcelTab from './components/ExcelTab';

function App() {
  return (
    <div>
      <NavBar />
      <Dropzone />
      <ExcelTab />
    </div>
  );
}

export default App;
