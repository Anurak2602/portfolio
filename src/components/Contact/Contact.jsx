import React from "react";  // นำเข้า React

import styles from "./Contact.module.css";  // นำเข้าไฟล์ css ของ Contact
import { getImageUrl } from "../../utils";  // นำเข้าฟังก์ชัน getImageUrl จากไฟล์ utils

export const Contact = () => {  // สร้างคอมโพเนนต์ Contact
  return (  // คืนค่า
    <footer id="contact" className={styles.container}>  {/* สร้างส่วนของ Contact โดยกำหนด className และ id */}
      <div className={styles.text}> {/* สร้างส่วนของข้อความ Contact โดยกำหนด className */}
        <h2>Contact</h2>  {/* สร้างส่วนของหัวข้อ Contact */}
        <p>ติดต่อสอบถามเพิ่มเติมได้ที่</p>  {/* สร้างส่วนของคำอธิบาย Contact */}
      </div>
      <ul className={styles.links}> {/* สร้างรายการลิงก์ Contact โดยกำหนด className */}

        <li className={styles.link}>  {/* สร้างส่วนของรายการ Contact โดยกำหนด className */}
          <img src={getImageUrl("contact/facebookIcon.png")} alt="Facebook icon" /> {/* กำหนดรูปภาพ */}
          <a href="https://www.facebook.com/max.ajaj">Anurak</a>  {/* กำหนดลิงก์ */}
        </li>   
        <li className={styles.link}>  {/* สร้างส่วนของรายการ Contact โดยกำหนด className */}
          <img src={getImageUrl("contact/instagramIcon.png")} alt="Instagram icon" />   {/* กำหนดรูปภาพ */}
          <a href="https://www.instagram.com/anrsn_m/">anrsn_m</a>  {/* กำหนดลิงก์ */}
        </li>
        <li className={styles.link}>  {/* สร้างส่วนของรายการ Contact โดยกำหนด className */}
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /> {/* กำหนดรูปภาพ */}
          <a href="https://www.github.com/Anurak2602">Anurak2602</a> {/* กำหนดลิงก์ */}
        </li>
      </ul>
    </footer>
  );
};
