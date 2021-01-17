import React from "react";
import NavBar from "./components/NavBar";
import Dropzone from "./components/Dropzone";
import jquery from "jquery";
import xlsx from 'xlsx'
// import Sandbox from './components/Sandbox/Sandbox-this'

import "./App.css";

const App = () => {

  return (
    <div>
      <NavBar />
      <Dropzone />
    </div>
  )
}

export default App;
