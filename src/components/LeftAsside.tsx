
import { Link } from "react-router-dom"

const data = [
    {
        href: "/",
        src: "/assets/img/swiper_image.jpg",
        text: "Аламудун Айылдык аймагында жаны балдар бакчасы ачылды",
        count: 3,
    },
    {
        href: "/",
        src: "/assets/img/swiper_image.jpg",
        text: "Урматтуу Мекендештер! Биометрикалык маалыматтарды тактоо жүрүп жатат",
        count: 3,
    },
    {
        href: "/",
        src: "/assets/img/swiper_image.jpg",
        text: "Аламүдүн айыл аймагында ыктыярдуу элдик кошуундар жөнүндө Жобо. ПОЛОЖЕНИЕ о добровольных народных дружинах Аламудунского айылного аймака.",
        count: 3,
    },
    {
        href: "/",
        src: "/assets/img/swiper_image.jpg",
        text: "Положения о квартальных и домовых комитетов ,предоставлении материальной помощи гражданам,организации сбора и вывоза твердых бытовых отходов и мусора на территории...",
        count: 3,
    },
    {
        href: "/",
        src: "/assets/img/swiper_image.jpg",
        text: "В Аламудунском айылном аймаке измена схема передвижения автобусов.",
        count: 3,
    },
]

export default function LeftAsside() {
    return (
        <div className="w-[100%] max-w-[300px] flex flex-col gap-[20px]">
            <BlockStyleds title="Последние новости">
                {
                    data.map((item: any, index: number) => (
                        <AssideBlock img={item.src} title={item.text} count={item.count} titleLink={item.href} key={index} />
                    ))
                }
                <button className="flex items-center justify-center gap-[5px] w-full bg-base_blue h-[28px] text-[13px] font-[700] font-roboto text-white">
                    Посмотреть еще
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16" stroke="#FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </BlockStyleds>
            <BlockStyleds title="Архивы">
                <div className="flex flex-col gap-[11px] mt-[20px]">
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                    <Link to="/" className="text-[14px] text-[#111111] font-roboto font-[500] leading-[18px] hover:text-base_blue duration-200">Июль 2024</Link>
                </div>
            </BlockStyleds>
        </div>
    )
}

export function BlockStyleds({ children, title }: { children: any, title: any }) {
    return (
        <div className="bg-white">
            <div className="border-t-[3px] border-solid border-t-base_blue px-[20px] leading-[52px] pb-[15px]">
                <h3 className="text-base_blue font-roboto text-[18px] font-[600] uppercase">{title}</h3>
                {children}
            </div>
        </div>
    )
}

export function AssideBlock({ img, title, count, titleLink, column }: { img: string, title: any, count: number, titleLink: string, column?: boolean }) {
    return (
        <div className={`flex items-start gap-[15px] pb-[20px] border-b border-solid border-b-[#ececec] ${!!column ? "flex-col" : "mb-[20px]"}`}>
            <img src={img} className={`object-cover ${!!column ? "w-[100%] h-[170px]" : "w-[108px]"}`} />
            <div className="flex flex-col gap-[6px]">
                <Link to={titleLink} className="text-[13px] font-roboto font-[600] leading-[18px] block duration-200 hover:text-base_blue">{title}</Link>
                <div className="flex items-center gap-[15px]">
                    {
                        column
                        &&
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                        <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                            <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[17px]">{count}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
