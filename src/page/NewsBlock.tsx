
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import API from "../axios";
import { Share } from "../components/LinksNo";

export default function NewsBlock() {
    const params = useParams()
    const [state, setState] = useState<any>(null)
    const news = useSelector((state: any) => state.news.news)

    useEffect(() => {
        API.get(`news/${params.id}/`)
            .then((res: any) => {
                setState(res.data)

            })
    }, [params])

    const handle__Submit = (e: any) => {
        e.preventDefault()

        let a = new FormData(e.target)
        let b = Object.fromEntries(a.entries())

        console.log(b);

    }

    return (
        <div className="max-w-[100%] w-[100%] 600px:col-[1_/_3] bg-white p-[20px] h-[max-content]">
            <div className="flex items-center gap-[5px] text-[#999999] text-[13px] font-roboto leading-[16px] font-[400] mb-[5px]">
                <Link to="/" className="hover:text-base_blue duration-200">Главная</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#999999" width="8px" height="8px" viewBox="0 0 32 32">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
                </svg>
                <Link to="/news/page/1" className="hover:text-base_blue duration-200">Новости</Link>
            </div>
            <div className="text-[#999999] hover:text-base_blue duration-200 font-roboto font-[400] text-[13px] mb-[10px]">
                &#8594; {state?.name}
            </div>
            <div>
                <h1 className="text-[#111111] font-roboto text-[30px] leading-[33px] font-[600]">{state?.name}</h1>
                <div className="flex items-center gap-[10px] my-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none">
                        <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                            <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400]">{state?.comments?.length}</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                            <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400]">{state?.views}</p>
                    </div>
                </div>
                <Share newsId={state?.id} likes={state?.likes} unchangebl={false} />
                <div className="mt-[10px] flex flex-col gap-[20px]">
                    {
                        state?.images.map((item: any, index: number) => (
                            <img src={item.image} key={index} className="w-[100%] h-[100%] object-cover" />
                        ))
                    }
                </div>
                <p className="text-[#666] font-roboto font-[400] text-[15px] leading-[20px] mt-[10px]">{state?.body}</p>

                <div className="border-t border-solid border-t-[#dedede] py-[20px] my-[20px]">
                    <p className="font-[900] text-[18px] leading-[20px] text-[#111]">Похожие новости</p>
                    <div className="grid grid-cols-3 gap-[10px] mt-[20px]">
                        {
                            !!state
                            &&
                            news.data?.results.slice(0, 2).map((item: any, index: number) => (
                                <div key={index}>
                                    <img src={item.images[0].image} className="w-[100%] h-[150px] object-cover" />
                                    <Link to={`/news/${item.id}/`} className="text-[#111111] text-[14px] block font-roboto font-[600] leading-[18px] mt-[18px] hover:text-base_blue duration-200">{item?.name}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="border-t border-solid border-t-[#dedede] py-[20px] my-[20px]">
                    <p className="font-[900] text-[18px] leading-[20px] text-[#111]">Комментари</p>
                    <div className="gap-[10px] mt-[20px] flex flex-col">
                        {
                            !!state
                            &&
                            state?.comments?.map((item: any, index: number) => (
                                <div key={index}>
                                    <p className="text-[12px] font-[400] text-base_blue leading-[18px]">{item.commentator.email}</p>
                                    <p className="text-[12px] font-[400] text-[#111] leading-[18px]">{item.decription}</p>
                                </div>
                            ))
                        }
                    </div>
                    <form className="w-[100%] mt-[50px]" onSubmit={handle__Submit}>
                        <input type="text" placeholder="Enter your comment" className="w-[100%] h-[40px] border mb-[10px] border-solid border-[#111] rounded-[4px] text-[14px] font-[400] leading-[18px] text-[#111] outline-none px-[10px]" />
                        <button className="bg-base_blue text-white px-[10px] py-[5px] rounded-[6px]">отправить</button>
                    </form>
                </div>
            </div>

            {/* <div className="flex 1200px:flex-wrap gap-[20px] mt-[20px]">
                <img src={state?.images[0].image} className="w-[100%] max-w-[270px] 1024px:max-w-[100%] min-w-[270px] h-[180px] 1024px:h-[250px] object-cover" />
                <div>
                    <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                    <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">{state?.name}</p>
                    <div className="flex items-center gap-[15px]">
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by {state?.user.email}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                            <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[#999] text-[12px] font-roboto font-[400]">{state?.views}</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                        </div>
                    </div>
                    <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">{state?.body}</p>
                </div>
            </div> */}

            {/* {
                !!newsParams.data
                &&
                newsParams?.data?.results.map((item: any, index: number) => {
                    if (index == 0) {
                        return (
                            <div className="mt-[20px]">
                                <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                                <p className="font-roboto text-[20px] leading-[22px] font-[600] mb-[8px]">{item.name}</p>
                                <div className="flex items-center gap-[15px]">
                                    <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by {item.user.email}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex items-center gap-[5px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                            <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="text-[#999] text-[12px] font-roboto font-[400]">{item.views}</p>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                            <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="flex 1200px:flex-wrap gap-[20px] mt-[20px]">
                                <img src={item.images[0].image} className="w-[100%] max-w-[270px] 1024px:max-w-[100%] min-w-[270px] h-[180px] 1024px:h-[250px] object-cover" />
                                <div>
                                    <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                                    <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">{item.name}</p>
                                    <div className="flex items-center gap-[15px]">
                                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by {item.user.email}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex items-center gap-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                                <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p className="text-[#999] text-[12px] font-roboto font-[400]">{item.views}</p>
                                        </div>
                                        <div className="flex items-center gap-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                                <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                                        </div>
                                    </div>
                                    <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">{item.body}</p>
                                </div>
                            </div>
                        )
                    }
                })
            } */}
        </div>
    )
}