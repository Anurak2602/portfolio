import React from "react";  // นำเข้า React
import ReactDOM from "react-dom/client";  // นำเข้า ReactDOM
import App from "./App.jsx";  // นำเข้า App.jsx
import "./index.css"; // นำเข้าไฟล์ index.css

import "@fontsource/outfit";    // นำเข้า font ที่ต้องการ
import "@fontsource/roboto";  // นำเข้า font ที่ต้องการ

ReactDOM.createRoot(document.getElementById("root")).render(  // สร้าง Root และ render App ลงใน Root
  <React.StrictMode>  {/* กำหนดให้เป็น StrictMode */}
    <App /> {/* นำ App มาใช้ */}
  </React.StrictMode> 
);
