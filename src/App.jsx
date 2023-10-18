import React from "react";
import Register from "./pages/Register";
import "./styles.scss";
import Login from "./pages/Login";
import Open from "./pages/OpenFile";
import Dashboard from "./pages/Dashboard";
import Upload from "./components/UploadFile";
import pdfFiles from "./pdfFiles";
import Home from "./components/Home";

// import { AuthContextProvider } from "../context/AuthContext";

function App() {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Open file={"some-file-2.pdf"}/>  */}
      <Home />
      {/* <Open /> */}
      {/* <HighlightAndComment /> */}
    </div>
  );
}

export default App;
