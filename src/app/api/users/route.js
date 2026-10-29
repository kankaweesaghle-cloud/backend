// นำเข้า NextResponse จาก next/server เพื่อใช้จัดการและส่งค่า HTTP Response กลับไปยังไคลเอนต์
import { NextResponse } from "next/server";

//================================================================================
// GET Function
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่รองรับ Request แบบ GET ที่เข้ามายัง Endpoint นี้ (เช่น การดึงข้อมูล)
 */
export async function GET() {
  try {
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ (Server Console) เพื่อใช้ในการ Monitor หรือ Debug
    console.log({ success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    // ดักจับ Error สำหรับ GET
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

//================================================================================
// POST Function
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: POST
 * ทำหน้าที่รองรับ Request แบบ POST ที่เข้ามายัง Endpoint นี้ (เช่น การเพิ่มข้อมูลใหม่)
 */
export async function POST() {
  try {
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ (Server Console) เพื่อใช้ในการ Monitor หรือ Debug
    console.log({ success: true, message: "เพิ่มข้อมูลผู้ใช้สำเร็จ", status: 201 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "เพิ่มข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 201 } // สำหรับการสร้างข้อมูลใหม่ ใช้ status: 201 (Created)
    );
  } catch (error) {
    // ดักจับ Error สำหรับ POST (ส่วนนี้ที่หายไปในโค้ดของคุณ)
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

