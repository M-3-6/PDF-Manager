import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FileList from "./pages/ViewFiles";
import Open from "./pages/OpenFile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles.scss";
import HighlightAndComment from "./components/HighlightAndComment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/home" element={< Home />} />
        <Route path="/files" element={<FileList />} />
        <Route path="/open-file" Component={Open} />
      </Routes>
    </Router>
  );
}

export default App;
