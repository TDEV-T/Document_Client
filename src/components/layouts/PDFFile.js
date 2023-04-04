import React from "react";
import Sarabun from "./../../styles/sarabun_font/Sarabun-Regular.ttf";
import download from "./download.png";

import {
  Document,
  Page,
  Image,
  Font,
  Text,
  StyleSheet,
  View,
  Line,
  Svg,
} from "@react-pdf/renderer";

Font.register({ family: "sarabun", format: "truetype", src: Sarabun });

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 5,
  },
  header_option: {
    fontSize: 14,
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
  image: {
    width: "50",
    height: "50",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  svgCheckboxNone: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderWidth: 1,
  },
  svgCheckboxCheck: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderWidth: 1,
    backgroundColor: "#000",
  },
  textCheckbox: {
    flexGrow: 1,
    fontSize: 10,
  },
});

const PDFFile = ({ value, benefit, comment, imgAll }) => {
  console.log(value, benefit, comment, imgAll);
  return (
    <Document
      style={{
        fontFamily: "sarabun",
      }}
    >
      <Page size="A4" style={{ marginTop: 10, marginLeft: 7, marginRight: 7 }}>
        <View style={styles.imageContainer}>
          <Image
            src="http://localhost:3456/api/image/logopntc.png"
            style={styles.image}
          />
        </View>

        <Text style={styles.header_option}>แบบฟอร์มการรายงาน</Text>
        <Text style={styles.header_option}>
          การปฏิบัติงาน/กิจกรรม/โครงการ/ในหน้าที่ที่ได้รับมอบหมาย
          รายละเอียดผลงานที่ส่ง
        </Text>
        <View>
          <Line style={{ borderColor: "black", borderWidth: 1 }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              รายละเอียด
            </Text>

            <Text style={{ fontSize: 12, textAlign: "center" }}>
              วันที่ {value.date_re}
            </Text>

            {/* Checkbox */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.textCheckbox}>ลักษณะงาน </Text>

              {/* checkbox */}
              <Svg
                style={
                  value.activity_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>กิจกรรม</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.project_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>โครงการ</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.another_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>อื่นๆ..........</Text>
              {/* checkbox */}
            </View>

            {/* Checkbox */}
          </View>
          <Line style={{ borderColor: "black", borderWidth: 1 }} />
          <View style={{ flex: 1 }}>
            <Text>Content for right column</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
