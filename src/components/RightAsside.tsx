import { AssideBlock, BlockStyleds } from "./LeftAsside";

export default function RightAsside() {
    return (
        <div className="w-[300px] flex flex-col">
            <div className="w-[300px] bg-[url(/assets/img/email_fon.jpg)] bg-cover bg-center px-[20px] py-[20px]">
                <img src="/assets/img/email.png" className="w-[145px] h-[145px] object-cover object-bottom mx-auto" />
                <button className="bg-[linear-gradient(rgb(29,_98,_240)_0%,_rgb(26,_214,_253)_100%)] mt-[20px] w-full h-[67px] text-[16px] leading-[17px] font-roboto font-[700] text-white">
                    ОНЛАЙН ОБРАЩЕНИЕ
                </button>
            </div>
            <BlockStyleds title="Недавние посты">
                <AssideBlock
                    img="/assets/img/swiper_image.jpg"
                    title="Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на..."
                    count={4}
                    titleLink="/"
                    column={true}
                />
                <AssideBlock
                    img="/assets/img/swiper_image.jpg"
                    title="Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на..."
                    count={4}
                    titleLink="/"
                    column={true}
                />
                <AssideBlock
                    img="/assets/img/swiper_image.jpg"
                    title="Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на..."
                    count={4}
                    titleLink="/"
                    column={true}
                />
            </BlockStyleds>
        </div>
    )
}
