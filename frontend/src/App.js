import React from 'react';
import NavBar from './components/NavBar'
import Dropzone from './components/Dropzone'
import Sandbox from './components/Sandbox/Sandbox-this'

import './App.css';
import ExcelTab from './components/ExcelTab';

function App() {
  return (
    <div>
      <NavBar />
      <Dropzone />
      <ExcelTab />
      <Sandbox />
    </div>
  );
}

export default App;
