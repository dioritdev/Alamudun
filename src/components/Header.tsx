
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const data = [
    {
        href: "/",
        text: "Главная",
        model: false
    },
    {
        href: "/alamudunskij-ao",
        text: "Аламудунский АО",
        model: true,
        links: [
            {
                href: "/",
                text: "Айыльный Кенеш"
            },
            {
                href: "chapter",
                text: "Глава"
            },
            {
                href: "zhizn-sela",
                text: "Жизнь села"
            },
            {
                href: "/",
                text: "История"
            },
            {
                href: "sotsialnoe-razvitie",
                text: "Социальное развитие"
            },
            {
                href: "statistika",
                text: "Статистика"
            },
        ]
    },
    {
        href: "/administratsiya",
        text: "Администрация",
        model: false
    },
    {
        href: "/postanovleniya",
        text: "Постановления",
        model: true,
        links: [
            {
                href: "postanovleniya-2019",
                text: "Постановления 2019"
            },
            {
                href: "postanovleniya-2018",
                text: "Постановления 2018"
            },
            {
                href: "postanovleniya-2016",
                text: "Постановления 2016"
            },
            {
                href: "postanovleniya-2017",
                text: "Постановления 2017"
            },
        ]
    },
    {
        href: "/dokumenty",
        text: "Документы",
        model: false
    },
    {
        href: "/news",
        text: "Новости",
        model: false
    },
    {
        href: "/onlajn-obrashhenie",
        text: "Онлайн обращение",
        model: false
    },
    {
        href: "/kontakty",
        text: "Контакты",
        model: false
    },
]

export default function Header() {
    const location = useLocation()
    const [state, setState] = useState(false)

    return (
        <header className="conteiner flex items-center justify-between px-4 bg-white sticky top-0 left-0 z-[9]">
            <Link to="/" className="w-52 block h-[75px]">
                <img src="/assets/img/logo.png" className="full_width object-contain" />
            </Link>
            <div className="flex items-center gap-6">
                {
                    data.map((item: any, index: number) => (
                        <div className="relative flex items-center gap-2 group" key={index}>
                            <Link to={item.href} className={`header_link hover:text-diff_blue hover:border-t-diff_blue ${location.pathname == item.href ? "text-diff_blue border-t-diff_blue" : "text-base_black border-transparent"}`}>
                                {item.text}
                            </Link>
                            {
                                item.model
                                &&
                                <img src="/assets/svg/arrow_bottom.svg" className="w-3.5 h-3.5 object-cover" />
                            }
                            {
                                item.model
                                &&
                                <div className="w-[calc(100%_+_100px)] flex group-hover:translate-y-full bg-white absolute bottom-0 py-2.5 -translate-y-full left-0 flex-col border-t-[3px] border-solid border-t-diff_blue">
                                    {
                                        item.links.map((itemel: any, index: number) => (
                                            <Link key={index} to={itemel.href} className="px-4 py-1.5 text-xl font-bold font-roboto text-diff_blue hover:text-white duration-200 hover:bg-base_blue">
                                                {itemel.text}
                                            </Link>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
            <div className="relative">
                <button className="w-6 h-6 group" onClick={() => setState(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-white stroke-black group-hover:stroke-diff_blue" />
                    </svg>
                </button>
                {
                    state
                    &&
                    <div className="bg-white border-t-[3px] border-solid border-t-diff_blue p-5 absolute bottom-0 left-0 -translate-x-[92%] translate-y-[150%] w-[300px]">
                        <div className="flex items-center gap-2.5 border border-solid border-milk_color p-1 px-2">
                            <input type="text" placeholder="Поиск..." className="font-normal text-base font-roboto text-black_text placeholder:text-black_text outline-none w-full" />
                            <button className="w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                                    <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-white stroke-black" />
                                </svg>
                            </button>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}
