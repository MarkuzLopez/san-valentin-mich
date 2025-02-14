import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { Loading } from "./components/loader/Loading";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>        
      <footer>
        <p>&copy; 2025 Mi Michellete</p>
      </footer>
    </>
  );
}

export default App;
