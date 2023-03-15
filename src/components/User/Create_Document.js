import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";

const Create_Document = () => {
  const userID = localStorage.getItem("user");
  const [value, setValue] = useState({
    header: "",
    start: "",
    end: "",
    content: "",
    own: userID,
  });

  const [file, setFile] = useState([]);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(file);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>สร้างเอกสาร</h3>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">หัวข้อ</label>
                <input
                  type="text"
                  className="form-control"
                  name="header"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">วันที่เริ่มโครงการ</label>
                <input
                  type="date"
                  className="form-control"
                  name="start"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">วันที่จบโครงการ</label>
                <input
                  type="date"
                  className="form-control"
                  name="end"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">เนื้อหา</label>
                <textarea
                  type="date"
                  className="form-control"
                  name="content"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">รูป</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={handleChangeFile}
                  multiple
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                สร้าง
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_Document;
