import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { notoSanThai, Helvetica } from "@/utils/font";
import Transition from "@/components/Transition";

export const metadata: Metadata = {
  title:
    "ลอยกระทงผ้าไทยออนไลน์ 2568 - ดิ โอล์ด สยาม พลาซ่า ชวนลดขยะในแม่น้ำลำคลอง พร้อมสืบสานประเพณีไทยได้โดยที่ไม่ต้องเพิ่มขยะให้กับธรรมชาติ",
  description:
    "ดิ โอลด์ สยาม พลาซ่า ชวนเพื่อนๆ มาลอยกระทงออนไลน์ด้วยกัน ช่วยลดขยะในแม่น้ำ และลำคลอง",
  keywords: [
    "ลอยกระทง",
    "ลอยกระทงผ้าไทย",
    "ผ้าไทย",
    "silkmarket",
    "ลอยกระทง2566",
    "ลอยกระทงออนไลน์",
    "loykrathong2566",
    "loykrathong",
    "krathongonline",
    "thaitradition",
    "ดิโอลด์สยาม",
    "ดิโอลด์",
    "ห้างสรรพสินค้า",
    "theoldsiam",
    "ลานมิ่งเมือง",
    "ลานเฟื่องนคร",
    "แหล่งอาหารอร่อยใจกลางกรุง",
    "ห้างติดคลองถม",
    "อมร",
    "ห้างสรรพสินค้าย่านเยาวราช",
    "ผ้าไหม",
    "ผ้าไหมไทย",
    "ขนมไทย",
    "ขนมไทยอร่อย",
    "ผ้าไหมสวย",
    "เครื่องประดับ",
    "เพชร",
    "ทอง",
    "เงิน",
    "plaza",
    "themall",
    "thaimarket",
    "rattanakosin",
  ],
  authors: [{ name: "ดิ โอลด์ สยาม พลาซ่า" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/loykrathong/assets/favicon.svg",
    apple: "/loykrathong/assets/favicon.svg",
  },
  alternates: {
    canonical: "https://theoldsiam.co.th/loykrathong",
  },
  openGraph: {
    title:
      "ลอยกระทงออนไลน์ 2568 - ดิโอล์ดสยามพลาซ่า ชวนลดขยะในแม่น้ำลำคลอง พร้อมสืบสานประเพณีไทยได้โดยที่ไม่ต้องเพิ่มขยะให้กับธรรมชาติ",
    description:
      "ดิโอลด์สยามชวนเพื่อนๆ มาลอยกระทงออนไลน์ด้วยกัน ช่วยลดขยะในแม่น้ำ และลำคลอง",
    url: "https://theoldsiam.co.th/loykrathong",
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/screencapture.jpg`,
      width: "800px",
      height: "600px",
    },
    siteName:
      "ลอยกระทงออนไลน์ 2568 - ดิโอล์ดสยามพลาซ่า ชวนลดขยะในแม่น้ำลำคลอง พร้อมสืบสานประเพณีไทยได้โดยที่ไม่ต้องเพิ่มขยะให้กับธรรมชาติ",
    locale: "th_TH",
    type: "website",
  },
  other: {
    ["fb:app_id"]: "427436798876082",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const csrf_token = process.env.NEXT_PUBLIC_CSRF_SECRET;

  const headers = new Headers();
  headers.append("X-CSRF-Token", String(csrf_token));
  return (
    <html
      lang="en"
      className={` ${notoSanThai.variable} ${Helvetica.variable}  `}
    >
      <GoogleAnalytics gaId={String(ga_id)} />
      <GoogleTagManager gtmId={String(ga_id)} />

      <meta name="x-csrf-token" content={process.env.NEXT_PUBLIC_CSRF_SECRET} />

      <meta
        name="google-site-verification"
        content="x7_i5A47OFXgKuASHRE32jBa7Q3JmaacnhofGp0akl0"
      />

      <body>
        <Transition>{children}</Transition>
        <img
          src="https://raw.githubusercontent.com/appzstory/appzstory-ribbon/main/black_ribbon_top_right.png"
          alt="Black Ribbon Top Right"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "80px",
            opacity: 0.9,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        ></img>
      </body>
    </html>
  );
}
