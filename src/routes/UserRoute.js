import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/layouts/Navbar";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children }) => {
  const { userReducer } = useSelector((state) => ({ ...state }));

  return userReducer && userReducer.token && userReducer.role === "user" ? (
    children
  ) : (
    <LoadingToRedirect />
  );
};

export default UserRoute;
