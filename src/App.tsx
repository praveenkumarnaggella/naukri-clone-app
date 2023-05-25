import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Header from "./components/Header";

const App = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const getAuth = window.localStorage.getItem("auth");
    if (getAuth === "true") {
      setAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!auth ? <Login setAuth={setAuth} /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!auth ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
