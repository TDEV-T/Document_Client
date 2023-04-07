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
  page: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  header_title_small: {
    fontSize: 10,
    textAlign: "left",
  },
  header_title_small_right: {
    fontSize: 10,
    textAlign: "right",
  },
  list_title_small: {
    fontSize: 10,
    marginRight: 10,
  },
  header_small: {
    fontSize: 11,
  },
});

const PDFFile = ({ value, part, benefit, comment, imgAll }) => {
  const formatDate = (date) => {
    const dateInput = new Date(date);
    const result = dateInput.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return result;
  };

  const rows = [];
  for (let i = 0; i < imgAll.length; i += 2) {
    const row = (
      <View style={{ flexDirection: "row", margin: 15 }}>
        <Image
          style={{ width: "50%", marginRight: "2%" }}
          src={"http://localhost:3456/api/image/" + imgAll[i]}
        />
        {i + 1 < imgAll.length && (
          <Image
            style={{ width: "50%", marginRight: "2%" }}
            src={"http://localhost:3456/api/image/" + imgAll[i + 1]}
          />
        )}
      </View>
    );
    rows.push(row);
  }

  const mades = [];

  if (value.statusmade_re === 1) {
    const made = (
      <View style={{ margin: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Svg style={styles.svgCheckboxCheck}></Svg>
          <Text style={styles.textCheckbox}>
            หัวหน้างาน {"         " + value.deptmade_re}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Svg style={styles.svgCheckboxNone}></Svg>
          <Text style={styles.textCheckbox}>แผนก </Text>
        </View>
      </View>
    );
    mades.push(made);
  } else {
    const made = (
      <View style={{ margin: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Svg style={styles.svgCheckboxNone}></Svg>
          <Text style={styles.textCheckbox}>หัวหน้างาน </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Svg style={styles.svgCheckboxCheck}></Svg>
          <Text style={styles.textCheckbox}>
            แผนก {"         " + value.deptmade_re}
          </Text>
        </View>
      </View>
    );
    mades.push(made);
  }

  let totalValue = 0;
  for (let i = 0; i < part.length; i++) {
    totalValue += part[i].value_pa;
  }

  return (
    <Document
      style={{
        fontFamily: "sarabun",
      }}
    >
      <Page size="A4" style={styles.page}>
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
          <View style={{ flex: 1, margin: 10 }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              รายละเอียด
            </Text>
            <Text style={{ fontSize: 11, textAlign: "right" }}>
              วันที่ {formatDate(value.date_re)}
            </Text>
            {/* Checkbox */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.textCheckbox}>ลักษณะงาน : </Text>

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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.textCheckbox}>ฝ่ายสังกัด : </Text>

              {/* checkbox */}
              <Svg
                style={
                  value.dev_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>พัฒนาฯ</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.manage_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>บริหารทรัพฯ</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.technical_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>วิชาการ</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.plan_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>แผนงานฯ</Text>
              {/* checkbox */}
            </View>
            <Text style={styles.header_title_small}>
              ตอบสนองตามนโยบายของสำนักงานคณะกรรมการอาชีวศึกษาา
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.textCheckbox}>กฎในแผนระดับ : </Text>

              {/* checkbox */}
              <Svg
                style={
                  value.college_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>วิทยาลัย</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.group_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>ฝ่าย</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.work_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>งาน</Text>
              {/* checkbox */}

              {/* checkbox */}

              <Svg
                style={
                  value.dept_re === "true"
                    ? styles.svgCheckboxCheck
                    : styles.svgCheckboxNone
                }
              ></Svg>
              <Text style={styles.textCheckbox}>แผนก</Text>
              {/* checkbox */}
            </View>
            <Text style={styles.header_title_small}>
              เข้าร่วมดำเนินโครงการวันที่ {formatDate(value.start_re)}
            </Text>
            <Text style={styles.header_title_small}>
              สถานที่เข้าร่วม / ดำเนินโครงการ {value.location_re} ณ
              วิทยาลัยเทคนิคพังงา
            </Text>
            <Text style={styles.header_title_small}>
              ชื่อโครงการ {value.name_re}
            </Text>
            <Text style={styles.header_title_small}>ผู้เข้าร่วมโครงการ</Text>

            {part.map((item, index) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.list_title_small}>{item.name_pa}</Text>
                <Text style={styles.list_title_small}>
                  จำนวน {item.value_pa} คน
                </Text>
              </View>
            ))}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text></Text>
              <Text style={styles.list_title_small}>
                รวมทั้งหมด จำนวน {totalValue} คน
              </Text>
            </View>
            <Text style={styles.header_small}>ผลดำเนินงานน</Text>
            <Text style={styles.list_title_small}>{value.result_re}</Text>
            <Text style={styles.header_small}>
              ประโยนช์ที่ได้รับจากการจัดทำโครงการ{value.name_re}
            </Text>
            {benefit.map((item, i) => (
              <Text style={styles.list_title_small}> - {item}</Text>
            ))}
            <Text style={styles.header_small}>
              ข้อเสนอแนะเพื่อการดำเนินงานครั้งต่อไปป
            </Text>
            {comment.map((item, i) => (
              <Text style={styles.list_title_small}> - {item}</Text>
            ))}
            {/* Checkbox */}

            <Text style={{ fontSize: 11, textAlign: "center" }}>
              ลงชื่อ{"                                         "}ผู้รายงาน
            </Text>
            <Text style={{ fontSize: 11, textAlign: "center" }}>
              {value.namemade_re}
            </Text>
            <Text style={{ fontSize: 11, textAlign: "center" }}>
              {value.statusmade_re === 1 ? "หัวหน้างาน" : "แผนก"}{" "}
              {value.deptmade_re}
            </Text>
          </View>

          <Line style={{ borderColor: "black", borderWidth: 1 }} />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                textDecoration: "underline",
                margin: 10,
              }}
            >
              รายละเอียดผู้จัดทำา
            </Text>
            <Text style={{ fontSize: 11, textAlign: "left", margin: 10 }}>
              {"(นาย/นาง/นางสาว)"}
              {value.namemade_re}
            </Text>
            {mades}
            <Line style={{ borderColor: "black", borderWidth: 1 }} />
            {rows}
            <Line style={{ borderColor: "black", borderWidth: 1 }} />
            <Text style={styles.header_title_small}>ผลการปฎิบัติงาน</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "stretch",
                margin: 10,
              }}
            >
              {/* checkbox */}
              <Svg style={styles.svgCheckboxNone}></Svg>
              <Text style={styles.textCheckbox}>ดี</Text>

              {/* checkbox */}

              {/* checkbox */}

              <Svg style={styles.svgCheckboxNone}></Svg>
              <Text style={styles.textCheckbox}>พอใช้</Text>
            </View>
            <Text style={styles.header_title_small}>ข้อเสนอแนะ</Text>
            <Text style={{ fontSize: 10, marginLeft: 15, marginTop: 10 }}>
              ลงชื่อ
            </Text>
            <Text style={{ fontSize: 10, marginTop: 10, textAlign: "center" }}>
              {"(นายมาโนช มีศรี)"}
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              รองผู้อำนวยการฝ่ายพัฒนากิจการนักเรียน นักศึกษาา
            </Text>
            <Line style={{ borderColor: "black", borderWidth: 1 }} />
            <Text style={{ fontSize: 10, marginLeft: 15, marginTop: 10 }}>
              ลงชื่อ
            </Text>
            <Text style={{ fontSize: 10, marginTop: 10, textAlign: "center" }}>
              {"(นายสมศักดิ์ ไชยโสดา)"}
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              ผู้อำนวยการวิทยาลัยเทคนิคพังงา
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
