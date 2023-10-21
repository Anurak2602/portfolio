import React from "react";  // นำเข้า React

import styles from "./Projects.module.css"; // นำเข้าไฟล์ css ของ Projects

import projects from "../../data/projects.json";  // นำเข้าข้อมูล projects จากไฟล์ projects.json
import { ProjectCard } from "./ProjectCard";  // นำเข้าคอมโพเนนต์ ProjectCard

export const Projects = () => { // สร้างคอมโพเนนต์ Projects
  return (
    <section className={styles.container} id="projects">  {/* สร้างส่วนของ Projects โดยกำหนด className และ id */}
      <h2 className={styles.title}>Projects</h2>  {/* สร้างส่วนของหัวข้อ Projects โดยกำหนด className */}
      <div className={styles.projects}> {/* สร้างส่วนของรายการโปรเจค */}
        {projects.map((project, id) => {  // สร้างรายการโปรเจค
          return <ProjectCard key={id} project={project} />;  // คืนค่า
        })}
      </div>
    </section>
  );
};
