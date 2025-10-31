"use client";

import React, { FC, useState } from "react";

import Link from "next/link";
import { FacebookShareButton, LineShareButton } from "react-share";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button } from "@headlessui/react";

interface Props {}

const SocialShared: FC<Props> = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-fit h-fit  xmd:absolute  xmd:left-6  xs:top-48  xmd:top-10 z-50 flex flex-row  gap-2 xmd:gap-3 items-center justify-center xmd:mt-0">
        <FacebookShareButton
          url={`${process.env.NEXT_PUBLIC_URL}`}
          // quote={post.from[0].name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.84 32.84"
            className="cursor-pointer w-10 h-10 hover:scale-110 duration-200 transition-all"
          >
            <circle
              id="Ellipse_9"
              data-name="Ellipse 9"
              cx="15.67"
              cy="15.67"
              r="15.67"
              transform="translate(0.75 0.75)"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
            />
            <path
              id="Path_548020"
              data-name="Path 548020"
              d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
              transform="translate(-71.834 -38.578)"
              fill="#FFF"
            />
          </svg>
        </FacebookShareButton>

        <LineShareButton
          url={`${process.env.NEXT_PUBLIC_URL}`}
          // @ts-ignore
          // quote={post.from[0].name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33.492 33.499"
            className="cursor-pointer  w-10 h-10 hover:scale-110 duration-200 transition-all"
          >
            <path
              id="Path_548021"
              data-name="Path 548021"
              d="M214.5,70.99h0a16,16,0,1,1,16-16,16.2,16.2,0,0,1-6.251,12.693,30.624,30.624,0,0,1-4.459,2.436A26.441,26.441,0,0,1,214.5,71"
              transform="translate(-197.758 -38.248)"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
            />
            <path
              id="Path_548022"
              data-name="Path 548022"
              d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
              transform="translate(-197.758 -38.248)"
              fill="#FFF"
            />
          </svg>
        </LineShareButton>

        <Link href={"https://theoldsiam.co.th/"}>
          <button
            type="button"
            id="gobackWebsite"
            className="hover:scale-110 duration-200 transition-all  w-10 h-10 rounded-full border smd:border-2 border-white text-white flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <span className="sr-only">back to website osp</span>
          </button>
        </Link>

        <button
          type="button"
          id="openDialog"
          onClick={() => setIsOpen(true)}
          className="hover:scale-110 duration-200 transition-all  w-10 h-10 rounded-full border smd:border-2 border-white text-white flex justify-center items-center"
        >
          <svg
            width="4"
            height="9"
            viewBox="0 0 4 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M2 1H2.01M1 4H2V8H3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="sr-only">back to website osp</span>
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-2xl w-full space-y-2 bg-white p-6 rounded-md h-full max-h-[85vh] overflow-y-auto">
            <DialogTitle className="font-bold md:text-xl">
              เงื่อนไขและข้อกำหนดของกิจกรรม
            </DialogTitle>
            <Description>
              กิจกรรม{" "}
              <span className="font-medium">
                ลอยกระทงผ้าไทย น้อมรำลึกในพระมหากรุณาธิคุณ
                สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง
              </span>{" "}
              จัดขึ้นระหว่างวันที่ 1 พฤศจิกายน 2568 ถึงวันที่ 30 พฤศจิกายน 2568
            </Description>

            <div className="space-y-6 ">
              <section className="mt-4">
                <h2 className="text-lg font-semibold  ">
                  วิธีการเข้าร่วมกิจกรรม
                </h2>
                <ol className="list-decimal list-inside ">
                  <li>
                    เข้าสู่เว็บไซต์ The Old Siam และเลือกหน้ากิจกรรม
                    “ลอยกระทงผ้าไทย”
                  </li>
                  <li>สร้างและตกแต่งกระทงออนไลน์ในสไตล์ผ้าไทยรักษ์โลก</li>
                  <li>ใส่ชื่อ และคำอธิษฐานหรือข้อความรำลึก</li>
                  <li>
                    กดปุ่ม <strong>สร้างกระทง</strong>{" "}
                    เพื่อลอยกระทงออนไลน์ของคุณ
                  </li>
                </ol>
                <p className="mt-2">
                  หลังจากกด ลอยกระทง แล้ว เนื้อหาจะไม่สามารถแก้ไขหรือยกเลิกได้
                  ผู้ร่วมกิจกรรมสามารถลอยกระทงได้ไม่จำกัดจำนวนตลอดระยะเวลากิจกรรม
                  และสามารถแชร์ไปยังโซเชียลได้
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">
                  เงื่อนไขการเข้าร่วมกิจกรรม
                </h2>
                <p className="">
                  การเข้าร่วมกิจกรรมนี้ถือว่าผู้ร่วมกิจกรรมได้อ่าน เข้าใจ
                  และยอมรับข้อกำหนดนี้แล้ว
                  รวมถึงนโยบายการคุ้มครองข้อมูลส่วนบุคคลของเว็บไซต์ The Old Siam
                  Plaza
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    เนื้อหาต้องไม่ละเมิดสิทธิส่วนบุคคลหรือทรัพย์สินทางปัญญาของผู้อื่น
                  </li>
                  <li>
                    ต้องไม่เป็นเนื้อหาลามกอนาจาร หมิ่นประมาท
                    หรือขัดต่อศีลธรรมอันดี
                  </li>
                </ul>
                <p className="mt-2">
                  บริษัทฯ
                  ขอสงวนสิทธิ์ลบหรือปฏิเสธการเผยแพร่เนื้อหาที่ไม่เหมาะสมโดยไม่ต้องแจ้งล่วงหน้า
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">การเผยแพร่เนื้อหา</h2>
                <p className="">
                  ผู้ร่วมกิจกรรมยินยอมให้เนื้อหาที่ส่งเข้าร่วมกิจกรรมถูกเผยแพร่บนหน้ากิจกรรม
                  ลอยกระทงผ้าไทย น้อมรำลึกในพระมหากรุณาธิคุณ
                  สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ
                  พระบรมราชชนนีพันปีหลวง ผ่านเว็บไซต์ The Old Siam Plaza
                  เพื่อเป็นส่วนหนึ่งของการรำลึกและสืบสานวัฒนธรรมไทย
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">
                  การแชร์ไปยังบริการของบุคคลภายนอก
                </h2>
                <p className="">
                  หากมีการแชร์กิจกรรมหรือเนื้อหาไปยังบริการภายนอก (เช่น
                  Facebook, Line, X)
                  ผู้ร่วมกิจกรรมจะอยู่ภายใต้ข้อกำหนดของผู้ให้บริการนั้น บริษัทฯ
                  ไม่รับผิดชอบต่อการดำเนินการหรือเนื้อหาที่ปรากฏบนแพลตฟอร์มภายนอก
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">
                  คุณสมบัติของผู้ร่วมกิจกรรม
                </h2>
                <p className="">
                  กิจกรรมนี้จัดขึ้นสำหรับผู้ที่บรรลุนิติภาวะแล้ว
                  หากยังไม่บรรลุนิติภาวะ ควรได้รับอนุญาตจากผู้ปกครองก่อนเข้าร่วม
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">
                  การเก็บและใช้ข้อมูลส่วนบุคคล
                </h2>
                <p className="">
                  บริษัทฯ จะเก็บ รวบรวม ใช้
                  และเปิดเผยข้อมูลส่วนบุคคลของผู้ร่วมกิจกรรม
                  เพื่อวัตถุประสงค์ของกิจกรรมนี้
                  โดยปฏิบัติตามนโยบายคุ้มครองข้อมูลส่วนบุคคลของ The Old Siam
                  Plaza และพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">
                  ความรับผิดชอบและการจำกัดความรับผิด
                </h2>
                <p className="">
                  ผู้ร่วมกิจกรรมเป็นผู้รับผิดชอบต่อการใช้งานและเนื้อหาที่เผยแพร่ด้วยตนเอง
                  บริษัทฯ
                  ไม่รับผิดชอบต่อความเสียหายหรือความสูญเสียที่เกิดขึ้นจากการเข้าร่วมกิจกรรม
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">
                  เหตุสุดวิสัยและการเปลี่ยนแปลงกิจกรรม
                </h2>
                <p className="">
                  บริษัทฯ ขอสงวนสิทธิ์ในการปรับเปลี่ยนรูปแบบ ระยะเวลา
                  หรือเงื่อนไขของกิจกรรมตามความเหมาะสม
                  โดยไม่จำเป็นต้องแจ้งให้ทราบล่วงหน้า ทั้งนี้
                  การตัดสินใจของบริษัทฯ ถือเป็นที่สิ้นสุด
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold  ">การติดต่อสอบถาม</h2>
                <p className="">
                  สำหรับข้อมูลเพิ่มเติมเกี่ยวกับกิจกรรม สามารถติดต่อทีมงาน The
                  Old Siam ได้ที่{" "}
                  <a
                    href="https://www.facebook.com/Theoldsiamshoppingplaza"
                    target="_blank"
                  >
                    Facebook : The Old Siam Plaza
                  </a>
                </p>
              </section>

              <div className="py-4 pb-8  border-t ">
                <p>
                  กิจกรรม ลอยกระทงผ้าไทยออนไลน์ จัดขึั้นเพื่อสืบสานคุณค่าผ้าไทย
                  และน้อมรำลึกในพระมหากรุณาธิคุณ แห่งสมเด็จพระนางเจ้าสิริกิติ์
                  พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง
                  ผู้ทรงเป็นแรงบันดาลใจแห่งความงดงามและภูมิปัญญาไทย
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center">
              <Button
                onClick={() => setIsOpen(false)}
                className="rounded bg-black px-4 py-2 w- text-white data-active:bg-sky-700 data-hover:bg-sky-500"
              >
                เข้าใจแล้ว
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default SocialShared;
