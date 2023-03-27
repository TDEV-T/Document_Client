import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PDFFile from "./PDFFile";

const Card = () => {
  return (
    <div class="card">
      <h5 class="card-header">Header 101</h5>
      <div class="card-body">
        <h5 class="card-title">รายละเอียดในรายงาน</h5>
        <p class="card-text">ลักษณะงาน</p>

        <div className="row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              name="activity_re"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              แผนก
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              name="activity_re"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              แผนก
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              name="activity_re"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              แผนก
            </label>
          </div>
        </div>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
