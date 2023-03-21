import React from "react";
import Sarabun from "./../../styles/sarabun_font/Sarabun-Regular.ttf";

import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({ family: "Roboto", format: "truetype", src: Sarabun });

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 5,
  },
  header_option: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
  },
  body: {
    fontFamily: "Roboto",
    margin: 5,
  },
  display: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const PDFFile = ({ value }) => {
  // let start_file = value.start_file;
  // let end_file = value.end_file;

  // value.start_file !== "" ? (start_file = value.start_file) : (start_file = "");
  // value.end_file !== "" ? (end_file = value.end_file) : (end_file = "");

  // console.log(start_file, end_file);

  // let startFormat, endFormat;

  // if (value !== "") {
  //   startFormat = start_file.toLocaleDateString("th-TH", {
  //     year: "numeric",
  //     month: "long",
  //     day: "nummeric",
  //   });

  //   endFormat = end_file.toLocaleDateString("th-TH", {
  //     year: "numeric",
  //     month: "long",
  //     day: "nummeric",
  //   });
  // }

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.header} fixed>
          แบบรายงานโครงการ
        </Text>
        <br />
        <Text style={styles.header_option} fixed>
          {value.header_file}
        </Text>

        <Text style={styles.header_option} fixed>
          ระหว่างวันที่ {value.start_file} ถึง {value.end_file}
        </Text>
        <Text style={styles.header_option} fixed>
          ณ {value.location_file} วิทยาลัยเทคนิคพังงา
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
