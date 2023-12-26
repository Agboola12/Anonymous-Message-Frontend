import React from "react";
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom'
import Land from "./User/Land";
import Register from "./User/Register";
import Login from "./User/Login";
import Message from "./User/Message";
import axios from "axios";
import UserGuard from "./User/Guard/UserGuard"
import UserMessage from "./User/UserMessage";


axios.interceptors.request.use((value) =>{
  value.headers = {
    "Authorization" : localStorage.token
  };
  return value;
})

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />

        <Route path="/" element={<UserGuard/>}>
          <Route path="/user-message" element={<UserMessage />} />
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
