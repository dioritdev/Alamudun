
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { BlockStyleds } from './LeftAsside';

const data = [
    {
        img: "/assets/img/swiper_image.jpg",
        text: "Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.",
        count: 4,
        className: "col-[1_/_7]"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        text: "Объявление о формировании электронной базы данных экспертов для оценки проектных предложений",
        count: 4,
        className: "col-[1_/_4]"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        text: "Аламүдүн аймагынын балдары үчүн жаңы жылдык майрамдык иш-чаралар өткөрүлдү",
        count: 4,
        className: "col-[4_/_7]"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        text: "Объявление о недопущении потребления электроэнергии сверх норматива",
        count: 4,
        className: "col-[1_/_3]"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        text: "ЧЕТКЕ КАГУУ / ОПРОВЕРЖЕНИЕ новости о задержании главы а.о. и...",
        count: 4,
        className: "col-[3_/_5]"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        text: "2023-2024-жылдардын кыш мезгилиндеги кырдаалга мониторинг жүргүзүү боюнча Штаб түзүү жөнүндө...",
        count: 4,
        className: "col-[5_/_7]"
    },
]

const SwiperData = [
    { src: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { src: "https://swiperjs.com/demos/images/nature-1.jpg" }
]

export default function CenterAsside() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="flex flex-col gap-[20px] max-w-[57%] w-[100%] swiper_parent">
            <div className="bg-white grid grid-cols-6 grid-rows-[360px_240px_160px] p-[20px] gap-[5px] [&>div:first-child>div:last-child>p]:text-[24px] [&>div:first-child>div:last-child>p]:leading-[25px] [&>div>div:last-child>p]:text-[16px] [&>div>div:last-child>p]:leading-[17px]">
                {
                    data.map((item: any, index: number) => (
                        <BlockGrid
                            key={index}
                            img={item.img}
                            count={item.count}
                            className={item.className}
                            text={item.text}
                        />
                    ))
                }
            </div>
            <BlockStyleds title="Галерея">
                <Swiper
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".next-slide2-button",
                        prevEl: ".prev-slide2-button"
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 h-[500px] group duration-200"
                >
                    {
                        SwiperData.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                <img src={item.src} className="w-[100%] h-[100%]" />
                            </SwiperSlide>
                        ))
                    }
                    <div>
                        <button className="prev-slide2-button slider_btn left-[3%] group-hover:opacity-[100%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
                                <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z" fill="#FFFF" />
                            </svg>
                        </button>
                        <button className="next-slide2-button slider_btn right-[3%] group-hover:opacity-[100%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32">
                                <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" fill="#FFFF" />
                            </svg>
                        </button>
                    </div>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper3 h-[100px]"
                >
                    {
                        SwiperData.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                <img src={item.src} className="w-[100%] h-[100%]" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </BlockStyleds>
        </div>
    )
}

function BlockGrid({ count, text, img, className }: { count: number, text: string, img: string, className: string }) {
    return (
        <div className={`relative flex flex-col group before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-[rgba(0,_0,_0,_0.3)] before:z-[2] ${!!className ? className : ""}`}>
            <div className="text-white bg-[#111] text-[10px] font-roboto relative z-[2] w-[max-content] h-[16px] px-[5px] leading-[16px] font-[500] m-[10px] group-hover:bg-base_blue duration-200">Новости</div>
            <img src={img} className="w-[100%] h-[100%] object-cover absolute top-0 left-0 z-[1]" />
            <div className="mt-auto px-[20px] py-[16px]">
                <div className="flex items-center gap-[15px] relative z-[2] mb-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                        <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                            <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#FFFF] text-[12px] font-roboto font-[400] leading-[17px]">{count}</p>
                    </div>
                </div>
                <p className="text-white font-roboto font-[600] relative z-[2]">{text}</p>
            </div>
        </div>
    )
}