import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import axios from "axios";
import { get_document } from "../../functions/file";
import Card from "../layouts/Card";

const Homepage_user = () => {
  const [files, setFiles] = useState([]);
  const userID = localStorage.getItem("user");
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    getDocument();
  }, []);

  const getDocument = () => {
    get_document(userID, token)
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-3">
        <h3>รายงานทั้งหมดที่เพิ่ม</h3>
        <div className="row  row-cols-sm-2 row-cols-4">
          {/* {files.map((file, i) => (
            <Card key={i} value={file} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Homepage_user;
