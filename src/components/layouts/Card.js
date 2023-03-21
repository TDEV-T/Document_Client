import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PDFFile from "./PDFFile";

const Card = ({ value }) => {
  const image = value.file_file.split(",");
  console.log(image);
  return (
    <div className="col mt-2">
      <div className="card" style={{ width: "18rem" }}>
        <div
          id={"carouselExampleControls" + value.id_file}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {image.map((img, index) => {
              return (
                <div
                  className={"carousel-item " + (index === 0 ? "active" : "")}
                  key={index}
                >
                  <img
                    src={"http://localhost:3456/api/image/" + img}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={"#carouselExampleControls" + value.id_file}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={"#carouselExampleControls" + value.id_file}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body">
          <h5 className="card-title">{value.header_file}</h5>
          <p className="card-text">{value.content_file}</p>
          <PDFDownloadLink
            document={<PDFFile value={value} />}
            fileName={value.header_file}
          >
            {({ loading }) =>
              loading ? (
                <button className="btn btn-outline-primary">
                  {" "}
                  Loading ...{" "}
                </button>
              ) : (
                <button className="btn btn-outline-primary">Download</button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
