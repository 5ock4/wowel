import React from "react";
import NavBar from "./components/NavBar";
import Dropzone from "./components/Dropzone";
import jquery from "jquery";
// import Sandbox from './components/Sandbox/Sandbox-this'

import "./App.css";

function App() {
  const postFile = (e) => {
    console.log(
      e.target.files[0].text().then((text) => jquery.post("http://localhost:3001/", text))
    );
  };

  return (
    <div>
      <NavBar />
      <Dropzone />
      <input type="file" onChange={postFile} style={{ padding: "10px" }} />
    </div>
  );
}

export default App;
