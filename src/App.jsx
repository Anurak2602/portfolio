import styles from "./App.module.css";  // นำเข้าไฟล์ css ของ App
import { About } from "./components/About/About"; // นำเข้าคอมโพเนนต์ About
import { Contact } from "./components/Contact/Contact"; // นำเข้าคอมโพเนนต์ Contact
import { Experience } from "./components/Experience/Experience";  // นำเข้าคอมโพเนนต์ Experience
import { Hero } from "./components/Hero/Hero";  // นำเข้าคอมโพเนนต์ Hero
import { Navbar } from "./components/Navbar/Navbar";  // นำเข้าคอมโพเนนต์ Navbar
import { Projects } from "./components/Projects/Projects";  // นำเข้าคอมโพเนนต์ Projects

function App() {  // สร้างคอมโพเนนต์ App
  return (  // คืนค่า
    <div className={styles.App}>  {/* สร้างส่วนของ App โดยกำหนด className */}
      <Navbar />  {/* นำ Navbar มาใช้ */}
      <Hero />  {/* นำ Hero มาใช้ */}
      <About /> {/* นำ About มาใช้ */}
      <Experience />  {/* นำ Experience มาใช้ */}
      <Projects />  {/* นำ Projects มาใช้ */}
      <Contact /> {/* นำ Contact มาใช้ */}
    </div>
  );
}

export default App;
