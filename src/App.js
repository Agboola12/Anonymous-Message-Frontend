import React from "react";
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom'
import Land from "./User/Land";
import axios from "axios";
import Register from "./User/Register";
import Login from "./User/Login";
import Message from "./User/Message";
import UserGuard from "./User/Guard/UserGuard"
import UserMessage from "./User/UserMessage";


axios.interceptors.request.use((value) => {
  value.headers = {
    "Authorization": localStorage.token
  };
  return value;
})

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />

          <Route path="/" element={<UserGuard />}>
            <Route path="/usermessage" element={<UserMessage />} />
          </Route>

          <Route path="/land" element={<Land />} />
          <Route path="/login" element={<Login />} />
          <Route path="/message/:id" element={<Message />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
