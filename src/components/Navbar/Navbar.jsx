import React, { useState } from "react";  // นำเข้า React และ useState

import styles from "./Navbar.module.css"; // นำเข้าไฟล์ css ของ Navbar
import { getImageUrl } from "../../utils";  // นำเข้าฟังก์ชัน getImageUrl จากไฟล์ utils

export const Navbar = () => { // สร้างคอมโพเนนต์ Navbar
  const [menuOpen, setMenuOpen] = useState(false);  // กำหนดตัวแปร menuOpen และ setMenuOpen โดยให้เริ่มต้นเป็น false

  return (  // คืนค่า
    <nav className={styles.navbar}> {/* สร้างส่วนของ Navbar โดยกำหนด className */}
      <a className={styles.title} href="/"> {/* สร้างส่วนของหัวข้อ Navbar โดยกำหนด className และ href */}
        Portfolio
      </a>  
      <div className={styles.menu}> {/* สร้างส่วนของเมนู Navbar โดยกำหนด className */}
        <img
          className={styles.menuBtn}  // กำหนด className
          src={ // กำหนดรูปภาพ
            menuOpen  // ถ้า menuOpen เป็น true ให้แสดงรูปภาพ closeIcon.png ถ้าไม่ใช่ให้แสดงรูปภาพ menuIcon.png
              ? getImageUrl("nav/closeIcon.png")  
              : getImageUrl("nav/menuIcon.png") 
          }
          alt="menu-button" // กำหนดคำอธิบายรูปภาพ
          onClick={() => setMenuOpen(!menuOpen)}  // กำหนดให้เมื่อคลิกที่รูปภาพจะเปลี่ยนค่า menuOpen
        />
        <ul // สร้างรายการเมนู Navbar
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}    // กำหนด className โดยให้เริ่มต้นเป็น menuItems และถ้า menuOpen เป็น true ให้เพิ่ม menuOpen
          onClick={() => setMenuOpen(false)}  // กำหนดให้เมื่อคลิกที่รายการเมนู จะเปลี่ยนค่า menuOpen เป็น false
        >
          <li>
            <a href="#about">About</a>  {/* กำหนด href */}
          </li>
          <li>
            <a href="#experience">Experience</a>  {/* กำหนด href */}
          </li>
          <li>
            <a href="#projects">Projects</a>  {/* กำหนด href */}
          </li>
          <li>
            <a href="#contact">Contact</a>  {/* กำหนด href */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
