import Link from "next/link";
export default function Page() {
  return (
    <>
      <center>
        <h1>Contact</h1>
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