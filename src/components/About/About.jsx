import React from "react";  // นำเข้า React

import styles from "./About.module.css";  // นำเข้าไฟล์ css ของ About
import { getImageUrl } from "../../utils";  // นำเข้าฟังก์ชัน getImageUrl จากไฟล์ utils

export const About = () => {  // สร้างคอมโพเนนต์ About
  return (  // คืนค่า
    <section className={styles.container} id="about"> {/* สร้างส่วนของ About โดยกำหนด className และ id */}
      <h2 className={styles.title}>About</h2> {/* สร้างส่วนของหัวข้อ About โดยกำหนด className */}
      <div className={styles.content}>  {/* สร้างส่วนของเนื้อหา About โดยกำหนด className */}
        <img
          src={getImageUrl("about/aboutImage.png")} // กำหนดรูปภาพ
          alt="Me sitting with a laptop"  // กำหนดคำอธิบายรูปภาพ
          className={styles.aboutImage} // กำหนด className
        />
        <ul className={styles.aboutItems}>  {/* สร้างส่วนของรายการ About โดยกำหนด className */}
          <li className={styles.aboutItem}> {/* สร้างส่วนของรายการ About โดยกำหนด className */}
            <div className={styles.aboutItemText}>  {/* สร้างส่วนของเนื้อหา About โดยกำหนด className */}
              <h3>ประวัติส่วนตัว</h3>
              <p>
              ชื่อ อนุรักษ์ แสงนาค (Anurak Saengnak) ชื่อเล่น แม็ก (Max)
              เกิด 26 กุมภาพันธ์ พ.ศ. 2544 (2001)
              อายุ 22
              สัญชาติ ไทย
              เชื้อชาติ ไทย
              ที่อยู่ หมู่บ้าน วัดดอนเสลา 45 ม.5 ต.ท่าผา อ.บ้านโป่ง จ.ราชบุรี 70110 
              สมาชิกในครอบครัวมี 5 คน พี่น้องมีสองคน พี่ชาย 1 คน น้องสาวอีก 1 คน
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}> {/* สร้างส่วนของรายการ About โดยกำหนด className */}
            <div className={styles.aboutItemText}>  {/* สร้างส่วนของเนื้อหา About โดยกำหนด className */}
              <h3>ประวัติการศึกษา</h3>
              <p>
                จบการศึกษา : จบอนุบาล-ป.6 โรงเรียนวัดดอนเสลา (Wat Don Salao School)
                มัธยมศึกษาตอนต้น ม.1-3 จากโรงเรียน รัตนรัตนราษฎร์บํารุง (Ratanaratbumrung School)
                การศึกษานระดับ ปวช.1-3 และปวส. 1-2 ที่ วิทยาลัยเทคนิคราชบุรี
              </p>
              <p>
                กำลังศึกษา : ระดับชั้นปริญญาตรี สาขาวิชาวิศวกรรมระบบเครื่องมือวัด ภาควิชาวิศวกรรมเครื่องมือวัดและอิเล็กทรอนิกส์
                คณะวิศวกรรมศาสตร์ ของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}> {/* สร้างส่วนของรายการ About โดยกำหนด className */}
            <div className={styles.aboutItemText}>  {/* สร้างส่วนของเนื้อหา About โดยกำหนด className */}
              <h3>กิจกรรมที่ชอบ</h3>
              <p>
                เพลงที่ชอบ : Sunflower ของ Post Malone, Swae Lee
              </p>
              <p>
                อาหารที่ชอบ : ข้าวมันไก่ทอดDC
              </p>
              <p>
                สถานที่ที่ชอบ : ทะเล หรือ ตั้งแคมป์ในป่า
              </p>
              <p>
                หนังที่ชอบดู : interstellar และหนังในค่าย Marvel และ DC
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
