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
});

const PDFFile = ({ value }) => {
  return (
    <Document
      style={{
        fontFamily: "sarabun",
      }}
    >
      <Page
        size="A4"
        style={{ margin: { top: 10, right: 15, bottom: 10, left: 15 } }}
      >
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
            <Text style={{ fontSize: 12, alignItems: "center" }}>
              รายละเอียด
            </Text>
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
