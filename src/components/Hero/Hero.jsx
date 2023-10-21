import React from "react";  // นำเข้า React

import styles from "./Hero.module.css"; // นำเข้าไฟล์ css ของ Hero
import { getImageUrl } from "../../utils";  // นำเข้าฟังก์ชัน getImageUrl จากไฟล์ utils

export const Hero = () => { // สร้างคอมโพเนนต์ Hero
  return (
    <section className={styles.container}>  {/* สร้างส่วนของ Hero โดยกำหนด className */}
      <div className={styles.content}>  {/* สร้างส่วนของเนื้อหา Hero โดยกำหนด className */}
        <h1 className={styles.title}>Anurak Saengnak</h1> {/* สร้างส่วนของหัวข้อ Hero โดยกำหนด className */}
        <h1 className={styles.title1}>(อนุรักษ์ แสงนาค)</h1> {/* สร้างส่วนของหัวข้อ Hero โดยกำหนด className */}
        <p className={styles.description}>  {/* สร้างส่วนของคำอธิบาย Hero โดยกำหนด className */}
        กำลังศึกษาในระดับชั้นปริญญาตรี
        สาขาวิชาวิศวกรรมระบบเครื่องมือวัด
        ภาควิชาวิศวกรรมเครื่องมือวัดและอิเล็กทรอนิกส์ ณ คณะวิศวกรรมศาสตร์ ของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
        </p>
        <a href="mailto:anrsn2602.m@gmail.com" className={styles.contactBtn}> {/* สร้างส่วนของปุ่ม Contact Me โดยกำหนด className */}
          Contact Me (Email)
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")} // กำหนดรูปภาพ
        alt="Hero image of me"  // กำหนดคำอธิบายรูปภาพ
        className={styles.heroImg}  // กำหนด className
      />
      <div className={styles.topBlur} />  {/* สร้างส่วนของเบลอด้านบน โดยกำหนด className */}
      <div className={styles.bottomBlur} /> {/* สร้างส่วนของเบลอด้านล่าง โดยกำหนด className */}
    </section>
  );
};
