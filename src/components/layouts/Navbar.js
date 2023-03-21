import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

//Router
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [current, setCurrent] = useState();

  const onClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      user: null,
    });
    navigate("/");
  };

  const item = [
    {
      label: <Link to="/user">Homepage</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/user/create">Create Document</Link>,
      key: "document",
      icon: <FileAddOutlined />,
    },
    {
      label: "Logout",
      key: "Logout",
      onClick: logout,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Menu
      mode="horizontal"
      onClick={onClick}
      selectedKeys={[current]}
      items={item}
      theme="dark"
    ></Menu>
  );
};

export default Navbar;
