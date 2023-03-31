import { Route, Routes } from "react-router-dom";
import React from "react";

//Page
import SignIn from "./components/General/Login";
import SignUp from "./components/General/SignUp";
import Homepage_user from "./components/User/Homepage_user";
import Homepage_admin from "./components/Admin/Homepage_admin";

//function
import { currentUser } from "./functions/auth";
//css
import "./App.css";
//Routes
import UserRoute from "./routes/UserRoute";
//redux
import { useDispatch } from "react-redux";
import AdminRoute from "./routes/AdminRoute";
import Create_Document from "./components/User/Create_Document";
import PDFFile from "./components/layouts/PDFFile";

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
            id: res.data[0].id_user,
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

        <Route
          path="/user"
          element={
            <UserRoute>
              <Homepage_user />
            </UserRoute>
          }
        />
        <Route
          path="/user/create"
          element={
            <UserRoute>
              <Create_Document />
            </UserRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Homepage_admin />
            </AdminRoute>
          }
        />
        <Route path="/pdf" element={<PDFFile />} />
      </Routes>
    </div>
  );
}

export default App;
