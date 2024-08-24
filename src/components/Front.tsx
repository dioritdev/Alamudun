
import { Link } from "react-router-dom"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
    {
        img: "/assets/img/swiper_image.jpg",
        title: "Стимгранттын жардамы менен эки айылга жети балдар аянтчасы курулган",
        view: 527,
        count: 0,
        newsLink: "/",
        titleLink: "/"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        title: "Стимгранттын жардамы менен эки айылга жети балдар аянтчасы курулган",
        view: 527,
        count: 0,
        newsLink: "/",
        titleLink: "/"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        title: "Стимгранттын жардамы менен эки айылга жети балдар аянтчасы курулган",
        view: 527,
        count: 0,
        newsLink: "/",
        titleLink: "/"
    },
    {
        img: "/assets/img/swiper_image.jpg",
        title: "Стимгранттын жардамы менен эки айылга жети балдар аянтчасы курулган",
        view: 527,
        count: 0,
        newsLink: "/",
        titleLink: "/"
    }
]

const linksBtn = [
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
    {
        href: "/",
        text: "Библиотека",
        src: "/assets/svg/file.svg"
    },
]

function SwiperBlock({ img, title, view, count, newsLink, titleLink }: { img: string, title: string, view: number, count: number, newsLink: string, titleLink: string }) {
    return (
        <div className="relative h-[100%] before:duration-200 before:content-[''] before:absolute before:w-[100%] before:h-[90%] before:top-[0] before:left-[0] duration-200 hover:before:bg-[rgba(0,_0,_0,_0.3)] before:z-[1]">
            <img src={img} className="w-[100%] h-[90%] object-cover" />
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[95%] z-[2] flex flex-col bg-white px-[20px] py-[15px]">
                <Link to={newsLink} className="bg-base_blue text-white font-[500] text-[10px] px-[5px] py-[1px] mb-[5px] w-[max-content]">Новости</Link>
                <Link to={titleLink} className="text-black text-[18px] font-[700] mb-[5px] hover:text-base_blue">{title}</Link>
                <div className="flex items-center gap-[15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                        <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                            <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400]">{view}</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                            <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400]">{count}</p>
                    </div>
                </div>
                <div className="bg-diff_blue w-[100px] h-[100%] absolute top-0 right-0" style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
            </div>
        </div>
    )
}

function AssideBtns({ href, text, src }: { href: string, text: string, src: string }) {
    return (
        <Link to={href} className="bg-base_blue text-white text-[14px] flex items-center justify-center gap-[5px] w-full py-[20px] h-[77px] hover:bg-easy_blue duration-200">
            <img src={src} className="w-[18px] h-[18px] object-contain" />
            {text}
        </Link>
    )
}

export default function Front() {
    return (
        <div className="px-4 py-[20px]">
            <div className="flex justify-between">
                <div className="relative w-[100%] max-w-[77%]">
                    <Swiper
                        navigation={{
                            nextEl: ".next-slide-button",
                            prevEl: ".prev-slide-button"
                        }}
                        modules={[Navigation]}
                        className="mySwiper h-[600px] group duration-200"
                    >
                        {
                            data.map((item: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <SwiperBlock
                                        img={item.img}
                                        title={item.title}
                                        view={item.view}
                                        count={item.count}
                                        newsLink={item.newsLink}
                                        titleLink={item.titleLink}
                                    />
                                </SwiperSlide>
                            ))
                        }
                        <div>
                            <button className="prev-slide-button slider_btn left-[3%] group-hover:opacity-[100%]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
                                    <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z" fill="#FFFF" />
                                </svg>
                            </button>
                            <button className="next-slide-button slider_btn right-[3%] group-hover:opacity-[100%]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32">
                                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" fill="#FFFF" />
                                </svg>
                            </button>
                        </div>
                    </Swiper>
                </div>
                <div className="max-w-[300px] w-[100%] min-w-[300px] flex flex-col gap-[5px]">
                    {
                        linksBtn.map((item: any, index: number) => (
                            <AssideBtns key={index} href={item.href} text={item.text} src={item.src} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
