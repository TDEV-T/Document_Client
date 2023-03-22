import React, { useEffect, useState } from "react";
import { create_document } from "../../functions/file";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar";

const Create_Document = () => {
  const userID = localStorage.getItem("user");
  const [fileList, setFileList] = useState();
  const files = fileList ? [...fileList] : [];

  const [part, setPart] = useState([
    {
      name: "",
      count: "",
    },
  ]);

  const handlePartChange = () => {
    setPart([...part,{}])
  }

  const handlePartRemove = (index) => {
   
  }

  const [value, setValue] = useState({
    start: "",
    activity: 0,
    project: 0,
    another: 0,
    dev: 0,
    manage: 0,
    plan: 0,
    college: 0,
    group: 0,
    work: 0,
    dept: 0,
    date: 0,
    location: "",
    name: "",
    startdate: "",
    content: "",
    participant: Math.random(),
    benefit: Math.random(),
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

    console.log(value);

    // const data = new FormData();

    // files.forEach((file, i) => {
    //   data.append("files", file);
    // });

    // if (files.length > 6) {
    //   toast.error("ใส่รูปภาพได้สูงสุด 6 รูป");
    //   return;
    // }

    // data.append("content", value.content);
    // data.append("header", value.header);
    // data.append("start", value.start);
    // data.append("end", value.end);
    // data.append("location", value.location);
    // data.append("own", value.own);
    // create_document(data, authtoken)
    //   .then((res) => {
    //     console.log(value);
    //     toast.success("เพิ่มสำเร็จ !");
    //     document.getElementById("form_create_document").reset();
    //   })
    //   .catch((err) => console.log(err));
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
                <label className="form-label">ลักษณะงาน</label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      name="activity"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      กิจกรรม
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="project"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      โครงการ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="project"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      อื่นๆ ....
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">ฝ่าย</label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      name="dev"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      พัฒนาฯ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="manage"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      บริหารทรัพฯ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="plan"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      วิชาการ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="college"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      แผนงาน
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  วันที่เข้าร่วมหรือดำเนินงาน
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="startdate"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">สถานที่จัดการเข้าร่วม</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">ชื่อโครงการ</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">วัตถุประสงค์</label>
                <textarea
                  className="form-control"
                  name="content"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">ผู้เข้าร่วม</label>
                {part.map((singlePart, index) => (
                  <div key={index}>
                    <div className="row mb-2">
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ชื่อ"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="จำนวน"
                        />
                      </div>
                      {part.length > 1 && (
                        <div className="col-2">
                          <button className="btn btn-danger">ลบ</button>
                        </div>
                      )}
                    </div>
                    {part.length - 1 === index && part.length < 3 && (
                      <div>
                        <button className="btn btn-primary">เพิ่ม</button>
                      </div>
                    )}
                  </div>
                ))}
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
