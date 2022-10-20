import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import HomeGuest from "../pages/HomeGuest";
import Login from "../pages/Login";
import Register from "../pages/Register";

function MainRouter() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeGuest />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<HomeGuest />} />
        </Route>
      )}
    </Routes>
  );
}

export default MainRouter;
