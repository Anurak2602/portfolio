export const getImageUrl = (path) => { // สร้างฟังก์ชัน getImageUrl โดยรับพารามิเตอร์ path
  return new URL(`/assets/${path}`, import.meta.url).href;  // สร้าง URL จาก path และ import.meta.url
};  
