import Image from "next/image";
import Link from "next/link";
export default function LoykraThongContent() {
  return (
    <div className="p-6 xmd:px-12 max-w-screen-lg flex flex-col space-y-2 min-h-[50vh] pb-[35vh] text-white">
      <div className="mb-4">
        <h1 className="text-4xl font-bold  text-center whitespace-pre-wrap">
          ลอยกระทงผ้าไทยออนไลน์ 2568
        </h1>
        <h2 className="text-lg font-medium text-center whitespace-pre-line">
          ร่วมสืบสาน รักษา และต่อยอด พระราชปณิธานผ้าไทย กับ ดิ โอลด์ สยาม พลาซ่า
          (The Silk Market of Thailand)
        </h2>
      </div>

      <section id="loy-krathong-tradition" aria-labelledby="tradition-heading">
        <div className="container flex flex-col gap-2 md:text-lg border-b border-white/20 pb-4">
          <h2 id="tradition-heading" className="text-xl font-bold">
            ทำไมเราจึง ลอยกระทง ?
          </h2>

          <p>
            วันลอยกระทง เป็นหนึ่งในประเพณีที่งดงามที่สุดของไทย ตรงกับวันเพ็ญ
            เดือน 12 (ขึ้น 15 ค่ำ เดือน 12) แก่นแท้ของประเพณีนี้
            คือการที่เรานำกระทงอันวิจิตรไปลอยตามแม่น้ำลำคลอง เพื่อเป็นการ{" "}
            <strong>ขอขมาพระแม่คงคา</strong> เทวีแห่งสายน้ำ
            ที่เราได้ใช้น้ำและอาจเผลอทำสิ่งไม่สมควรลงไป นอกจากนี้
            ยังมีความเชื่อว่าเป็นการ <strong>ลอยทุกข์โศก</strong>{" "}
            และเคราะห์ร้ายต่างๆ ให้พ้นไปจากตัว เริ่มต้นสิ่งดีๆ ในชีวิต
          </p>

          <div className="w-full relative rounded-md overflow-hidden">
            <Image
              src="/loykrathong/assets/2025/434.jpg"
              alt="krathong-tradition"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full "
            />
          </div>
        </div>
      </section>

      <section
        id="loy-krathong-online-tradition"
        aria-labelledby="online-tradition-heading"
      >
        <div className="container flex flex-col gap-2 md:text-lg border-b border-white/20 pb-4">
          <h2 id="online-tradition-heading" className="text-xl font-bold">
            ลอยกระทงออนไลน์ เกิดขึ้นได้อย่างไร ?
          </h2>

          <p>
            ในยุคที่โลกต้องการความร่วมมือจากเราทุกคน การ "สืบสาน" ประเพณี
            สามารถทำควบคู่ไปกับการ "รักษา" โลกของเราได้
            การลอยกระทงออนไลน์จึงเป็นทางเลือกที่ตอบโจทย์คนยุคใหม่ ด้วยเหตุผลดีๆ
            มากมาย:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>รักษ์โลก ลดมลพิษ (Eco-Friendly)</strong>{" "}
              นี่คือประโยชน์ที่ชัดเจนที่สุด
              การลอยกระทงออนไลน์ช่วยลดปริมาณขยะในแม่น้ำลำคลองได้อย่างสิ้นเชิง
              ไม่ว่าจะเป็นวัสดุจากธรรมชาติที่ย่อยสลายช้า (หากมีปริมาณมากเกินไป)
              หรือวัสดุอันตรายอย่างโฟมและพลาสติก
              การลอยผ่านหน้าจอก็คือการช่วยลดภาระให้แม่น้ำอย่างแท้จริง
            </li>
            <li>
              <strong>สะดวก...สืบสานได้จากทุกที่ (Convenient)</strong>{" "}
              ไม่ว่าคุณจะอยู่ที่ไหนบนโลก ก็สามารถร่วมเป็นส่วนหนึ่งของประเพณีได้
              เพียงแค่มีสมาร์ทโฟนหรือคอมพิวเตอร์
              ก็สามารถส่งคำอธิษฐานและลอยกระทงได้ทันที
            </li>
            <li>
              <strong>ปลอดภัยทั้งกายและใจ (Safe)</strong>{" "}
              ลดความเสี่ยงจากการเดินทาง การเบียดเสียด หรืออุบัติเหตุริมน้ำ
              ให้คุณและครอบครัวได้ร่วมกิจกรรมอย่างมีความสุขและสบายใจ
            </li>
          </ul>
        </div>
      </section>

      <section
        id="loy-krathong-thai-fabric"
        aria-labelledby="thai-fabric-heading"
      >
        <div className="container flex flex-col gap-2 md:text-lg border-b border-white/20 pb-4 pt-6">
          <h2 id="thai-fabric-heading" className="text-xl font-bold">
            สานต่อและต่อยอดมรดกผ้าไทย
          </h2>

          <p>
            พระมหากรุณาธิคุณของสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ
            พระบรมราชชนนีพันปีหลวง ต่อวงการศิลปวัฒนธรรม
            ได้ก่อให้เกิดรากฐานและความภาคภูมิในการอนุรักษ์และฟื้นฟูนานัปการ
            หนึ่งในนั้นคือ "ชุดไทยพระราชนิยม" ที่ส่งผลต่อการสานต่องานผ้าไทย
            และกำลังจะกลายเป็นมรดกภูมิปัญญาที่จับต้องไม่ได้ของมนุษยชาติ (UNESCO)
            ภายในปี 2569
          </p>

          <p>
            "ชุดไทย" ไม่ใช่เพียงเสื้อผ้า หากแต่เป็นภาพแทนของรากเหง้า ศิลปะ
            และภูมิปัญญาแห่งแผ่นดินไทย
          </p>

          <p>
            ล่าสุด องค์การ <span className="font-semibold">UNESCO</span>{" "}
            ได้ยืนยันว่า
            <span className="font-semibold">
              "ชุดไทย: ความรู้ งานช่างฝีมือ
              และแนวปฏิบัติการแต่งกายชุดไทยประจำชาติ"
            </span>
            จะถูกบรรจุเข้าสู่การพิจารณาในการประชุมคณะกรรมการฯ สมัยที่ 21 ในปี
            2569 ซึ่งนับเป็นก้าวสำคัญของการผลักดัน Soft Power
            ไทยให้เป็นที่รู้จักไปทั่วโลก
          </p>

          <div className="w-full relative rounded-md overflow-hidden">
            <Image
              src="/loykrathong/assets/2025/thai-fabric-1.jpg"
              alt="krathong-thai-fabric"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full "
            />
          </div>
          <p className=" w-full  text-white/50 text-center py-2 text-sm ">
            [ ขอบคุณรูปภาพจาก Facebook : ไทยคู่ฟ้า ]
          </p>

          <div className="w-full relative rounded-md overflow-hidden">
            <Image
              src="/loykrathong/assets/2025/thai-fabric-2.jpg"
              alt="krathong-thai-fabric"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full "
            />
          </div>
          <p className=" w-full  text-white/50 text-center py-2 text-sm ">
            [ ขอบคุณรูปภาพจาก Facebook : ไทยคู่ฟ้า ]
          </p>

          <p>
            ทั้ง 8 ชุดต่างสะท้อนให้เห็นถึงภูมิปัญญาไทยที่สั่งสมผ่านศิลปะการทอผ้า
            การปัก และการตัดเย็บอย่างละเอียดอ่อน
            และยังเป็นแรงบันดาลใจให้เหล่านักออกแบบไทยร่วมสมัยสร้างสรรค์ผลงานใหม่ๆ
          </p>

          <p>
            นับว่า <strong>ชุดไทย</strong> ไม่ได้เป็นเพียงเครื่องนุ่งห่ม
            แต่เป็นสื่อกลางแห่งความภาคภูมิใจ เป็นเครื่องบอกเล่าประวัติศาสตร์
            และเป็นสมบัติที่ควรค่าแก่การจารึกไว้ในมรดกของมวลมนุษยชาติ
          </p>

          <div>
            <Link
              href="https://theoldsiam.co.th/th/stories/the-8-royal-thai-costumes-at-the-old-siam-plaza"
              target="_blank"
            >
              อ่านเรื่องราว เปิดชุดประจำชาติ ชุดไทยพระราชนิยม ๘ แบบ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
