import React from "react";
import Sarabun from "./../../styles/sarabun_font/Sarabun-Regular.ttf";
import download from './../../assets/download.png';

import {
  Document,
  Page,
  Image,
  Font,
  Text,
  StyleSheet,
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
  return (
    <Document>
      <Page>
        <Image src={download}/>
        <Text>Headerss</Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
