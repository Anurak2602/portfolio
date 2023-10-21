import React from "react";  // นำเข้า React

import styles from "./Experience.module.css"; // นำเข้าไฟล์ css ของ Experience
import skills from "../../data/skills.json";  // นำเข้าข้อมูล skills จากไฟล์ skills.json
import history from "../../data/history.json";  // นำเข้าข้อมูล history จากไฟล์ history.json
import { getImageUrl } from "../../utils";  // นำเข้าฟังก์ชัน getImageUrl จากไฟล์ utils

export const Experience = () => { // สร้างคอมโพเนนต์ Experience
  return (  // คืนค่า
    <section className={styles.container} id="experience">  {/* สร้างส่วนของ Experience โดยกำหนด className และ id */}
      <h2 className={styles.title}>Experience</h2>  {/* สร้างส่วนของหัวข้อ Experience โดยกำหนด className */}
      <div className={styles.content}>    {/* สร้างส่วนของเนื้อหา Experience โดยกำหนด className */}
        <div className={styles.skills}> {/* สร้างส่วนของทักษะ Experience โดยกำหนด className */}
          {skills.map((skill, id) => {  // สร้างรายการทักษะ
            return (  // คืนค่า
              <div key={id} className={styles.skill}> {/* สร้างส่วนของทักษะ โดยกำหนด className และ key */}
                <div className={styles.skillImageContainer}>  {/* สร้างส่วนของรูปภาพทักษะ โดยกำหนด className */}
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} /> {/* กำหนดรูปภาพ */}
                </div>
                <p>{skill.title}</p>  {/* กำหนดคำอธิบายรูปภาพ */}
              </div>
            );
          })}
        </div>  
        <ul className={styles.history}> {/* สร้างรายการประวัติการทำงาน */}
          {history.map((historyItem, id) => { // สร้างรายการประวัติการทำงาน
            return (  // คืนค่า
              <li key={id} className={styles.historyItem}>  {/* สร้างส่วนของรายการประวัติการทำงาน โดยกำหนด className และ key */}
                <img
                  src={getImageUrl(historyItem.imageSrc)} // กำหนดรูปภาพ
                  alt={`${historyItem.organisation} Logo`}  // กำหนดคำอธิบายรูปภาพ
                />
                <div className={styles.historyItemDetails}> {/* สร้างส่วนของรายละเอียดประวัติการทำงาน โดยกำหนด className */}
                  <h3>{`${historyItem.role}`}</h3>  {/* กำหนดหัวข้อ */}
                  <p>{`${historyItem.organisation}`}</p>  {/* กำหนดรายละเอียด */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {  // สร้างรายการประสบการณ์
                      return <li key={id}>{experience}</li>;  // คืนค่า
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
