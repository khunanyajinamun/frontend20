import Link from "next/link";
export default function Home() {
  return (
    <>
      <center>
        <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์ขายสินค้าออนไลน์</h1>
      </center>
      <br></br>
      
      <center>
            <Link href="/">หนัาหลัก</Link> | 
            <Link href="/about">เกี่ยวกับ</Link> | 
            <Link href="/service">บริการ</Link> | 
            <Link href="/contact">ติดต่อ</Link>
      </center>
    </>
  );
}