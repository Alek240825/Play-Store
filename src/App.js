import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './paginas/auth/home';
import Menu from './paginas/auth/menu';
import Login from './paginas/auth/login';
import Register from './paginas/auth/register';


function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
