// นำเข้า NextResponse จาก next/server เพื่อใช้จัดการและส่งค่า HTTP Response กลับไปยังไคลเอนต์
import { NextResponse } from "next/server";

//================================================================================
// GET Function
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่รองรับ Request แบบ GET ที่เข้ามายัง Endpoint นี้ (เช่น การดึงข้อมูล)
 */
export async function GET(request, { params }) {
  try {
    // ดึงค่า id จากพารามิเตอร์ของ URL
    const { id } = await params; 
    
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ พร้อมแสดง id ที่ถูกเรียก
    console.log({ success: true, message: `ดึงข้อมูลผู้ใช้รหัส ${id} สำเร็จ`, status: 200 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
        userId: id // เพิ่มค่า id เพื่อส่งกลับไปแสดงผล
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
// PUT Function
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: PUT
 * ทำหน้าที่รองรับ Request แบบ PUT ที่เข้ามายัง Endpoint นี้ (เช่น การดึงข้อมูล)
 */
export async function PUT(request, { params }) {
  try {
    // ดึงค่า id จากพารามิเตอร์ของ URL
    const { id } = await params; 
    
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ พร้อมแสดง id ที่ถูกเรียก
    console.log({ success: true, message: `อัปเดตข้อมูลผู้ใช้รหัส ${id} สำเร็จ`, status: 200 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "อัปเดตข้อมูลผู้ใช้สำเร็จ",
        userId: id // เพิ่มค่า id เพื่อส่งกลับไปแสดงผล
      },
      { status: 200 }
    );
  } catch (error) {
    // ดักจับ Error สำหรับ PUT
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
// GET Function
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: DELETE
 * ทำหน้าที่รองรับ Request แบบ DELETE ที่เข้ามายัง Endpoint นี้ (เช่น การดึงข้อมูล)
 */
export async function DELETE(request, { params }) {
  try {
    // ดึงค่า id จากพารามิเตอร์ของ URL
    const { id } = await params; 
    
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ พร้อมแสดง id ที่ถูกเรียก
    console.log({ success: true, message: `ลบข้อมูลผู้ใช้รหัส ${id} สำเร็จ`, status: 200 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON
    return NextResponse.json(
      {
        success: true,
        message: "ลบข้อมูลผู้ใช้สำเร็จ",
        userId: id // เพิ่มค่า id เพื่อส่งกลับไปแสดงผล
      },
      { status: 200 }
    );
  } catch (error) {
    // ดักจับ Error สำหรับ DELETE
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