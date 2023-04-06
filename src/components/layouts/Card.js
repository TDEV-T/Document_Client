import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { get_part } from "../../functions/file";
import PDFFile from "./PDFFile";
import { Button, Modal } from "antd";

const Card = ({ value }) => {
  const [part, setPart] = useState([]);
  const id_re = value.id_re;
  const token = localStorage.getItem("access_token");
  const benefit = value.benefit_re.split(",");
  const comment = value.comment_re.split(",");
  const imgAll = value.img_re.split(",");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    getPart();
  }, []);

  const getPart = () => {
    get_part(id_re, token)
      .then((res) => setPart(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="">{value.name_re}</h5>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setOpen(true)}
        >
          รายละเอียด
        </button>
        {
          (part !== "")
        }
        <PDFDownloadLink
          document={
            <PDFFile
              value={value}
              part={part}
              benefit={benefit}
              comment={comment}
              imgAll={imgAll}
            />
          }
        >
          {({ loading }) =>
            loading ? (
              <button type="button" className="btn btn-success mx-3">
                Loading ....
              </button>
            ) : (
              <button type="button" className="btn btn-success mx-3">
                PDF Print
              </button>
            )
          }
        </PDFDownloadLink>
        <Modal
          title={value.name_re}
          centered
          open={open}
          style={{
            top: 20,
            bottom: 20,
          }}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
          footer={[
            <Button key="back" onClick={() => setOpen(false)}>
              ปิด
            </Button>,
          ]}
        >
          <h5 className="card-title">รายละเอียดในรายงาน</h5>
          <p className="card-text">ลักษณะงาน</p>
          <label className="checkbox-inline me-2">
            <input
              type="checkbox"
              checked={value.activity_re === "true" ? true : false}
            />{" "}
            กิจกรรม
          </label>
          <label className="checkbox-inline me-2">
            <input
              type="checkbox"
              checked={value.project_re === "true" ? true : false}
            />{" "}
            โครงการ
          </label>
          <label className="checkbox-inline me-2">
            <input
              type="checkbox"
              checked={value.another_re === "true" ? true : false}
            />{" "}
            อื่นๆ ..............
          </label>
          <br /> <br />
          <p className="card-text">ฝ่าย</p>
          <label className="checkbox-inline me-2">
            <input
              type="checkbox"
              checked={value.dev_re === "true" ? true : false}
            />{" "}
            พัฒนาฯ
          </label>
          <label className="checkbox-inline me-2">
            <input
              type="checkbox"
              checked={value.manage_re === "true" ? true : false}
            />{" "}
            บริหารฯ
          </label>
          <label className="checkbox-inline me-2">
            <input
              type="checkbox"
              checked={value.technical_re === "true" ? true : false}
            />{" "}
            วิชาการ
          </label>
          <label className="checkbox-inline me-2">
            <input
              type="checkbox"
              checked={value.plans_re === "true" ? true : false}
            />{" "}
            แผนงาน
          </label>
          <p className="card-text">
            สถานที่จัดการเข้าร่วม : {value.location_re}
          </p>
          <p className="card-text">ชื่อโครงการ : {value.name_re}</p>
          <p className="card-text">วัตถุประสงค์ : {value.content_re}</p>
          <p className="card-text">ผู้เข้าร่วม:</p>
          <ul className="list-group">
            {part.map((singlePart, i) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {singlePart.name_pa} : {singlePart.value_pa}
              </li>
            ))}
          </ul>
          <p className="card-text">ผลการดำเนินงาน : {value.result_re}</p>
          <p className="card-text">ประโยชน์ได้รับ : </p>
          <ul className="list-group">
            {benefit.map((singlebe, i) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {singlebe}
              </li>
            ))}
          </ul>
          <p className="card-text">ข้อเสนอแนะ : </p>
          <ul className="list-group">
            {comment.map((singlecom, i) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {singlecom}
              </li>
            ))}
          </ul>
          <p className="card-text">
            ผู้จัดทำ : {value.statusmade_re === 1 ? "หัวหน้างาน" : "แผนก"}{" "}
            {value.deptmade_re} {value.namemade_re}
          </p>
          <p className="card-text">ภาพประกอบ : </p>
          <div className="row row-cols-3">
            {imgAll.map((singleImg, i) => (
              <div className="col">
                <img
                  src={"http://localhost:3456/api/image/" + singleImg}
                  className="rounded img-fluid"
                ></img>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Card;
