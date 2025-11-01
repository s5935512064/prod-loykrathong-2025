import Image from "next/image";
import Link from "next/link";

export default function LoykraThongContent() {
  return (
    <div className="p-6 xmd:px-12 max-w-screen-lg flex flex-col space-y-2 min-h-[50vh] pb-[35vh] text-white">
      <div className="mb-4">
        <h1 className="xmd:text-4xl text-3xl font-bold  text-center whitespace-pre-wrap">
          ลอยกระทงผ้าไทยออนไลน์ 2568
        </h1>
        <h2 className="xmd:text-lg text-base font-medium text-center whitespace-pre-line">
          ร่วมสืบสาน รักษา และต่อยอด พระราชปณิธานผ้าไทย กับ ดิ โอลด์ สยาม พลาซ่า
          (Silk Market of Thailand)
        </h2>
      </div>

      <section id="loy-krathong-tradition" aria-labelledby="tradition-heading">
        <div className="container flex flex-col gap-2 md:text-lg border-b border-white/20 pb-4">
          <h2 id="tradition-heading" className="text-xl font-bold ">
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

          <div className="w-full relative rounded-md overflow-hidden ">
            <Image
              src="/loykrathong/assets/2025/26213183.webp"
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
          <h2 id="online-tradition-heading" className="text-xl font-bold mt-7">
            ลอยกระทงออนไลน์ เกิดขึ้นได้อย่างไร ?
          </h2>

          <p>
            ในยุคที่โลกต้องการความร่วมมือจากเราทุกคน การ "สืบสาน" ประเพณี
            สามารถทำควบคู่ไปกับการ "รักษา" โลกของเราได้
            การลอยกระทงออนไลน์จึงเป็นทางเลือกที่ตอบโจทย์คนยุคใหม่ ด้วยเหตุผลดีๆ
            มากมาย:
          </p>

          <ul className="list-disc list-inside space-y-2 pb-4">
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

          <p>
            จากความมุ่งมั่นเหล่านี้ <strong>ดิ โอลด์ สยาม พลาซ่า</strong>{" "}
            ได้เล็งเห็นถึงความสำคัญของการสืบสานประเพณีในรูปแบบใหม่นี้
            เราจึงเป็นหนึ่งในผู้ริเริ่มจัดกิจกรรม{" "}
            <strong>"ลอยกระทงออนไลน์"</strong> และทำอย่างต่อเนื่อง
            <strong>มาเป็นระยะเวลามากกว่า 5 ปี</strong>
          </p>

          <p>
            ผลตอบรับที่อบอุ่นและเพิ่มขึ้นอย่างต่อเนื่องในทุกปี
            คือเครื่องยืนยันว่าผู้คนยังคงผูกพันกับประเพณีอันงดงามนี้
            และนี่คือแรงผลักดันสำคัญที่ทำให้เรามุ่งมั่นที่จะ "ไปต่อ" และ
            "ต่อยอด"
            ประสบการณ์ลอยกระทงออนไลน์ให้ลึกซึ้งและเปี่ยมด้วยความหมายยิ่งขึ้น...
          </p>

          <div className="w-full relative rounded-md overflow-hidden mt-2 ">
            <Image
              src="/loykrathong/assets/2025/2021-11-12_08-16-11_klilt-1536x718.webp"
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

          <p className="italic  text-center py-2 text-lg xmd:text-xl bg-white/10 p-2 rounded-md ">
            "ชุดไทย" ไม่ใช่เพียงเสื้อผ้า หากแต่เป็นภาพแทนของรากเหง้า ศิลปะ
            และภูมิปัญญาแห่งแผ่นดินไทย
          </p>

          <p>
            ล่าสุด องค์การ <span className="font-semibold">UNESCO</span>{" "}
            ได้ยืนยันว่า
            <span className="font-semibold px-2">
              "ชุดไทย: ความรู้ งานช่างฝีมือ
              และแนวปฏิบัติการแต่งกายชุดไทยประจำชาติ"
            </span>
            จะถูกบรรจุเข้าสู่การพิจารณาในการประชุมคณะกรรมการฯ สมัยที่ 21 ในปี
            2569 ซึ่งนับเป็นก้าวสำคัญของการผลักดัน Soft Power
            ไทยให้เป็นที่รู้จักไปทั่วโลก
          </p>

          <div className="w-full relative rounded-md overflow-hidden">
            <Image
              src="/loykrathong/assets/2025/thai-fabric-1.webp"
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
              src="/loykrathong/assets/2025/thai-fabric-2.webp"
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

          <Link
            href="https://theoldsiam.co.th/th/stories/the-8-royal-thai-costumes-at-the-old-siam-plaza"
            target="_blank"
            className="block w-fit  mt-2   rounded-md hover:underline italic text-yellow-500"
          >
            อ่านเรื่องราว เปิดชุดประจำชาติ ชุดไทยพระราชนิยม ๘ แบบ ได้ที่นี่....
          </Link>

          <p>
            ดังนั้นเพื่อเป็นการเฉลิมฉลองการเดินทางของ "ชุดไทย"
            สู่การเป็นมรดกโลกที่คนทั้งโลกภาคภูมิใจ
            และเพื่อร่วมเป็นส่วนหนึ่งในการ "ต่อยอด" มรดกแห่งภูมิปัญญานี้{" "}
            <strong>ดิ โอลด์ สยาม พลาซ่า</strong>{" "}
            จึงได้น้อมนำเอกลักษณ์และความวิจิตรของชุดไทยพระราชนิยมทั้ง ๘ แบบ
            มาเป็นแรงบันดาลใจหลักในการรังสรรค์{" "}
            <strong>"กระทงผ้าไทยมงคล"</strong> สำหรับกิจกรรมลอยกระทงออนไลน์
            ประจำปี 2568 หากคุณพร้อมแล้วสามารถกดปุ่ม "สร้างกระทง"
            เพื่อลอยกระทงออนไลน์ของคุณได้แล้วตอนนี้
          </p>
        </div>
      </section>

      <section id="campaign-footer" aria-labelledby="footer-heading">
        <div className="container flex flex-col gap-2 md:text-lg  border-white/20 pb-4 pt-6">
          <h2 id="footer-heading" className="text-xl font-bold">
            ขอบคุณที่ร่วม "สืบสาน รักษา ต่อยอด" ไปกับเรา
          </h2>

          <p>
            กิจกรรมลอยกระทงผ้าไทยออนไลน์ 2568
            ได้ส่งมอบคำอธิษฐานและความสุขให้ทุกท่านแล้ว
            แต่ภารกิจในการสืบสานมรดกผ้าไทยของเรายังคงดำเนินต่อไป{" "}
            <strong>ดิ โอลด์ สยาม พลาซ่า</strong>{" "}
            ยังคงมีความมุ่งมั่นอย่างไม่หยุดยั้ง ที่จะพัฒนาและตอกย้ำความเป็น{" "}
            <strong>"Silk Market of Thailand"</strong> (ศูนย์กลางตลาดผ้าไหมไทย)
            เรามุ่งมั่นที่จะเป็นศูนย์กลางที่รวบรวมผ้าไหมและผ้าไทยที่ดีที่สุดจากทุกภูมิภาคทั่วประเทศไว้ในที่เดียว
          </p>

          <p>
            เราขอเชิญทุกท่านมาร่วมสัมผัสและเลือกสรรผ้าไทยอันงดงามได้ด้วยตัวคุณเอง
            ที่{" "}
            <a
              href="https://theoldsiam.co.th/en/directory"
              target="_blank"
              className=" hover:underline italic text-yellow-500"
            >
              ลานผ้าไหม ชั้น 2 ดิ โอลด์ สยาม พลาซ่า
            </a>{" "}
            ที่ซึ่งมีร้านค้าผ้าไทยชั้นนำและชุดไทยหลากหลายสไตล์รอต้อนรับคุณอยู่เสมอ
          </p>

          <p className="italic  text-center py-2 text-lg xmd:text-xl bg-white/10 p-2 rounded-md ">
            <strong>แล้วพบกันใหม่ ในกิจกรรมลอยกระทงออนไลน์ปี 2569!</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
