import React, { useEffect, useState } from "react";
import { create_document } from "../../functions/file";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar";

const Create_Document = () => {
  const userID = localStorage.getItem("user");
  const [fileList, setFileList] = useState();
  const files = fileList ? [...fileList] : [];

  const [value, setValue] = useState({
    header: "",
    location: "",
    start: "",
    end: "",
    content: "",
    own: userID,
  });

  const authtoken = localStorage.access_token;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e) => {
    setFileList(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    files.forEach((file, i) => {
      data.append("files", file);
    });

    if (files.length > 6) {
      toast.error("ใส่รูปภาพได้สูงสุด 6 รูป");
      return;
    }

    data.append("content", value.content);
    data.append("header", value.header);
    data.append("start", value.start);
    data.append("end", value.end);
    data.append("location", value.location);
    data.append("own", value.own);
    create_document(data, authtoken)
      .then((res) => {
        console.log(value);
        toast.success("เพิ่มสำเร็จ !");
        document.getElementById("form_create_document").reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h3>สร้างเอกสาร</h3>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form
              encType="multipart/form-data"
              id="form_create_document"
              onSubmit={handleSubmit}
            >
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
                <label className="form-label">สถานที่</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
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
                  required
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
