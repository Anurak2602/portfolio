import { defineConfig } from "vite";  // นำเข้าฟังก์ชัน defineConfig จาก vite
import react from "@vitejs/plugin-react"; // เพิ่มปลั๊กอิน React

// https://vitejs.dev/config/ 
export default defineConfig({ // กำหนดค่าในการทำงานของ Vite
  plugins: [react()], // เพิ่มปลั๊กอิน React
  css: {  // กำหนดค่าในการทำงานของ CSS
    modules: {  // กำหนดให้ใช้ CSS Module
      localsConvention: "camelCase",  // กำหนดชื่อคลาสใน CSS Module ให้เป็นรูปแบบ camelCase
    },  
  },
});