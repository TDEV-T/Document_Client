// import { Container, Row, Col, Button, FormGroup, Form,FormLabel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
//Page
import SignIn from "./components/General/Login";
import SignUp from "./components/General/SignUp";
import Homepage_user from "./components/User/Homepage_user";
import Homepage_admin from "./components/Admin/Homepage_admin";

//function
import { currentUser } from "./functions/auth";

import "./App.css";

//redux
import { useDispatch } from "react-redux";

//Layout
// import Navbar from "./layouts/Navbar";

function App() {
  const dispatch = useDispatch();

  const idtoken = localStorage.access_token;
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        console.log(res.data[0]);
        dispatch({
          type: "LOGIN",
          user: {
            token: idtoken,
            username: res.data[0].username_user,
            role: res.data[0].name_tu,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>

        <Route path="/user" element={Homepage_user} />
        <Route path="/admin" element={Homepage_admin} />
      </Routes>
    </div>
  );
}

export default App;
