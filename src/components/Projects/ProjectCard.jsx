import React from "react";  // นำเข้า React

import styles from "./ProjectCard.module.css";  // นำเข้าไฟล์ css ของ ProjectCard
import { getImageUrl } from "../../utils";  // นำเข้าฟังก์ชัน getImageUrl จากไฟล์ utils

export const ProjectCard = ({ // สร้างคอมโพเนนต์ ProjectCard
  project: { title, imageSrc, description, skills, demo, source },  // กำหนดค่า
}) => { 
  return (  // คืนค่า
    <div className={styles.container}>  {/* สร้างส่วนของ ProjectCard โดยกำหนด className */}
      <img  
        src={getImageUrl(imageSrc)} // กำหนดรูปภาพ
        alt={`Image of ${title}`} // กำหนดคำอธิบายรูปภาพ
        className={styles.image}  // กำหนด className
      />
      <h3 className={styles.title}>{title}</h3> {/* สร้างส่วนของหัวข้อ โดยกำหนด className */}
      <p className={styles.description}>{description}</p> {/* สร้างส่วนของคำอธิบาย โดยกำหนด className */}
      <ul className={styles.skills}>  {/* สร้างรายการทักษะ */}
        {skills.map((skill, id) => {  // สร้างรายการทักษะ
          return (  // คืนค่า
            <li key={id} className={styles.skill}>  {/* สร้างส่วนของรายการทักษะ โดยกำหนด className และ key */}
              {skill} 
            </li>
          );
        })}
      </ul>
    </div>
  );
};
