import { AssideBlock } from "./LeftAsside";

const data = [
    {
        title: "Недавние новости",
        children: [
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            },
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            },
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            }
        ]
    },
    {
        title: "Недавние новости",
        children: [
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            },
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            },
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            }
        ]
    },
    {
        title: "Недавние новости",
        children: [
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            },
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            },
            {
                img: "/assets/img/swiper_image.jpg",
                title: <span className="text-white">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</span>,
                count: 4,
                titleLink: "/"
            }
        ]
    },
]

export default function Footer() {
    return (
        <footer>
            <div className="px-4 bg-base_blue flex gap-[30px] pt-[47px] pb-[26px]">
                {
                    data.map((item: any, index: number) => (
                        <FooterBlock
                            key={index}
                            title={item.title}
                        >
                            {
                                item.children.map((el: any, ind: number) => (
                                    <AssideBlock
                                        key={ind}
                                        img={el.img}
                                        title={el.title}
                                        count={el.count}
                                        titleLink={el.titleLink}
                                    />
                                ))
                            }
                        </FooterBlock>
                    ))
                }
                <FooterBlock title="Контакты">
                    <div className="max-w-[300px] w-[100%] min-w-[300px] flex flex-col gap-[10px]">
                        <div className="flex items-center justify-between w-[100%]">
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">Новости</p>
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">(117)</p>
                        </div>
                        <div className="flex items-center justify-between w-[100%]">
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">Новости</p>
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">(117)</p>
                        </div>
                        <div className="flex items-center justify-between w-[100%]">
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">Новости</p>
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">(117)</p>
                        </div>
                        <div className="flex items-center justify-between w-[100%]">
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">Новости</p>
                            <p className="text-white text-[14px] font-roboto font-[500] leading-[18px]">(117)</p>
                        </div>
                    </div>
                </FooterBlock>
            </div>
            <div className="px-4 bg-[#1e73be] h-[58px] py-[11px] text-white text-[12px] font-roboto font-[500] text-center">
                2020 Аламудунский АО | Все права защищены
            </div>
        </footer>
    )
}

function FooterBlock({ children, title }: { children: any, title: string }) {
    return (
        <div>
            <h3 className="text-white font-roboto font-[600] text-[18px] leading-[20px] uppercase pb-[16px] mb-[20px] border-b-[1px] border-solid border-b-[#eaeaea]">{title}</h3>
            {children}
        </div>
    )
}