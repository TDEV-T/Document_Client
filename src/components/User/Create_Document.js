import React, { useState } from "react";
import { create_document } from "../../functions/file";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar";

const Create_Document = () => {
  const userID = localStorage.getItem("user");
  const [fileList, setFileList] = useState();

  const files = fileList ? [...fileList] : [];

  const [value, setValue] = useState({
    start: "",
    location: "",
    name: "",
    startdate: "",
    content: "",
    result: "",
    dept_made: "",
    name_made: "",
    parti: "",
    comment: "",
    benefit: "",
    status_made: "",
    own: userID,
  });

  const [boxstatus, setBoxStatus] = useState({
    activity: false,
    project: false,
    another: false,
    dev: false,
    manage: false,
    plan: false,
    tech: false,
    college: false,
    group: false,
    work: false,
    dept: false,
    date: false,
  });

  const handleChangeCheckBox = (e) => {
    setBoxStatus({ ...boxstatus, [e.target.name]: e.target.checked });
  };

  const [comment, setComment] = useState([
    {
      name: "",
    },
  ]);

  const [part, setPart] = useState([
    {
      name: "",
      count: "",
    },
  ]);

  const [benefit, setBenefit] = useState([
    {
      name: "",
    },
  ]);

  const handleCommentChange = () => {
    if (comment.length < 3) {
      setComment([...comment, { name: "" }]);
    } else {
      toast.error("เพิ่มได้สูงสุด 3");
    }
  };

  const handleRemoveComment = (index) => {
    const list = [...comment];
    list.splice(index, 1);
    setComment(list);
  };

  const handleChangeComment = (e, index) => {
    const { name, value } = e.target;
    const list = [...comment];
    list[index][name] = value;
    setComment(list);
  };

  const handleBenefitChange = () => {
    if (benefit.length < 3) {
      setBenefit([...benefit, { name: "" }]);
    } else {
      toast.error("เพิ่มได้สูงสุด 3");
    }
  };

  const handleRemoveBenefit = (index) => {
    const list = [...benefit];
    list.splice(index, 1);
    setBenefit(list);
  };

  const handleChangeBenefit = (e, index) => {
    const { name, value } = e.target;
    const list = [...benefit];

    list[index][name] = value;
    setBenefit(list);
  };

  const handleChangePart = (e, index) => {
    const { name, value } = e.target;
    const list = [...part];

    list[index][name] = value;
    setPart(list);
  };

  const handlePartChange = () => {
    if (part.length < 3) {
      setPart([...part, { name: "", count: "" }]);
    } else {
      toast.error("เพิ่มได้สูงสุด 3");
    }
  };

  const handlePartRemove = (index) => {
    const list = [...part];
    list.splice(index, 1);
    setPart(list);
  };

  const handleSavePart = () => {
    if (part) {
      setValue({ ...value, parti: part });
      toast.success("บันทึกสำเร็จ !");
    } else {
      toast.error("กรุณาเพิ่มผู้เข้าร่วมโครงการก่อน !");
    }
  };

  const handleSaveBenefit = () => {
    let BenefitAll = "";

    for (let i = 0; i < benefit.length; i++) {
      BenefitAll += benefit[i].name;

      if (i !== benefit.length - 1) {
        BenefitAll += ",";
      }
    }

    setValue({ ...value, benefit: BenefitAll });
  };

  const handleSaveComment = () => {
    let list = [...comment];
    let commentAll = "";
    for (let i = 0; i < list.length; i++) {
      commentAll += list[i].name;
      if (i !== list.length - 1) {
        commentAll += ",";
      }
    }
    setValue({ ...value, comment: commentAll });
  };

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
    let partJson = JSON.stringify(part);
    data.append("start_re", value.startdate);
    data.append("activity_re", boxstatus.activity);
    data.append("project_re", boxstatus.project);
    data.append("another_re", boxstatus.another);
    data.append("dev_re", boxstatus.dev);
    data.append("manage_re", boxstatus.manage);
    data.append("plans_re", boxstatus.plan);
    data.append("technical_re", boxstatus.tech);
    data.append("college_re", boxstatus.college);
    data.append("group_re", boxstatus.group);
    data.append("work_re", boxstatus.work);
    data.append("dept_re", boxstatus.dept);
    data.append("location_re", value.location);
    data.append("name_re", value.name);
    data.append("content_re", value.content);
    data.append("benefit_re", value.benefit);
    data.append("comment_re", value.comment);
    data.append("own_re", value.own);
    data.append("part", partJson);
    data.append("result_re", value.result);
    data.append("statusmade_re", value.status_made);
    data.append("namemade_re", value.name_made);
    data.append("deptmade_re", value.dept_made);
    create_document(data, authtoken)
      .then((res) => {
        toast.success("สร้างเอกสาร สำเร็จ !");
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
                <label className="form-label">ลักษณะงาน</label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      name="activity"
                      onChange={handleChangeCheckBox}
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
                      onChange={handleChangeCheckBox}
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
                      onChange={handleChangeCheckBox}
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
                      onChange={handleChangeCheckBox}
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
                      onChange={handleChangeCheckBox}
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
                      name="tech"
                      onChange={handleChangeCheckBox}
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
                      name="plan"
                      onChange={handleChangeCheckBox}
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
                <label className="form-label">แผนระดับ</label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      name="college"
                      onChange={handleChangeCheckBox}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      วิทยาลัย
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="group"
                      onChange={handleChangeCheckBox}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      ฝ่าย
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="work"
                      onChange={handleChangeCheckBox}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      งาน
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      name="dept"
                      onChange={handleChangeCheckBox}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      แผนก
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
                          name="name"
                          value={singlePart.name}
                          onChange={(e) => handleChangePart(e, index)}
                        />
                      </div>
                      <div className="col-4">
                        <input
                          type="number"
                          name="count"
                          className="form-control"
                          value={singlePart.count}
                          placeholder="จำนวน"
                          onChange={(e) => handleChangePart(e, index)}
                        />
                      </div>
                      {part.length > 1 && (
                        <div className="col-2">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handlePartRemove(index)}
                          >
                            ลบ
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      {part.length - 1 === index && (
                        <div>
                          <button
                            type="button"
                            onClick={handlePartChange}
                            className="btn btn-primary"
                          >
                            เพิ่ม
                          </button>
                          <button
                            type="button"
                            onClick={handleSavePart}
                            className="btn btn-success m-2"
                          >
                            บันทึก
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-3">
                <label className="form-label">ผลการดำเนินงาน</label>
                <textarea
                  className="form-control"
                  name="result"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">ประโยชน์ที่ได้รับ</label>
                {benefit.map((singleBenefit, index) => (
                  <div key={index}>
                    <div className="row mb-2">
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ชื่อ"
                          name="name"
                          value={singleBenefit.name}
                          onChange={(e) => handleChangeBenefit(e, index)}
                        />
                      </div>
                      {benefit.length > 1 && (
                        <div className="col-2">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveBenefit(index)}
                          >
                            ลบ
                          </button>
                        </div>
                      )}
                    </div>
                    {benefit.length - 1 === index && (
                      <div>
                        <button
                          type="button"
                          onClick={handleBenefitChange}
                          className="btn btn-primary"
                        >
                          เพิ่ม
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveBenefit}
                          className="btn btn-success m-2"
                        >
                          บันทึก
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <label className="form-label">ข้อเสนอแนะ</label>
                {comment.map((singleComment, index) => (
                  <div key={index}>
                    <div className="row mb-2">
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ชื่อ"
                          name="name"
                          value={singleComment.name}
                          onChange={(e) => handleChangeComment(e, index)}
                        />
                      </div>
                      {comment.length > 1 && (
                        <div className="col-2">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveComment(index)}
                          >
                            ลบ
                          </button>
                        </div>
                      )}
                    </div>
                    {comment.length - 1 === index && (
                      <div>
                        <button
                          type="button"
                          onClick={handleCommentChange}
                          className="btn btn-primary"
                        >
                          เพิ่ม
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveComment}
                          className="btn btn-success m-2"
                        >
                          บันทึก
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="row mb-3">
                <label className="form-label">ผู้จัดทำ</label>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">
                    ฝ่าย
                  </label>
                  <select
                    id="inputState"
                    name="status_made"
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option value="false" selected>
                      เลือก
                    </option>
                    <option value="1">หัวหน้างาน</option>
                    <option value="2">ครูผู้สอน</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">ชื่อฝ่าย</label>
                  <input
                    className="form-control"
                    name="dept_made"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">ชื่อคนจัดทำ</label>
                  <input
                    className="form-control"
                    name="name_made"
                    onChange={handleChange}
                  />
                </div>
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
