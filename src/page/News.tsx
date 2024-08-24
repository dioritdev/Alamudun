import AssideRight from "../components/AssideRight";
import { AssideBlock, BlockStyleds } from "../components/LeftAsside";

export default function News() {
    return (
        <main className="bg-milk_gray py-[20px] px-4 flex justify-between gap-[20px] relative">
            <div className="max-w-[300px] w-[100%]">
                <BlockStyleds title="Последние записи">
                    <AssideBlock
                        img="/assets/img/swiper_image.jpg"
                        title="Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции."
                        count={5}
                        titleLink="/"
                    />
                    <AssideBlock
                        img="/assets/img/swiper_image.jpg"
                        title="Объявление о формировании электронной базы данных экспертов для оценки проектных предложений"
                        count={5}
                        titleLink="/"
                    />
                    <AssideBlock
                        img="/assets/img/swiper_image.jpg"
                        title="Объявление о формировании электронной базы данных экспертов для оценки проектных предложений"
                        count={5}
                        titleLink="/"
                    />
                    <AssideBlock
                        img="/assets/img/swiper_image.jpg"
                        title="Объявление о формировании электронной базы данных экспертов для оценки проектных предложений"
                        count={5}
                        titleLink="/"
                    />
                    <AssideBlock
                        img="/assets/img/swiper_image.jpg"
                        title="Объявление о формировании электронной базы данных экспертов для оценки проектных предложений"
                        count={5}
                        titleLink="/"
                    />
                </BlockStyleds>
            </div>
            <div className="max-w-[100%] w-[100%] bg-white p-[20px] h-[max-content]">
                <div className="flex items-center gap-[5px] text-[#999999] text-[13px] font-roboto leading-[16px] font-[400] mb-[10px]">
                    <span>Главная</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#999999" width="8px" height="8px" viewBox="0 0 32 32">
                        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
                    </svg>
                    <span>Новости</span>
                </div>
                <div className="mt-[20px]">
                    <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                    <p className="font-roboto text-[20px] leading-[22px] font-[600] mb-[8px]">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</p>
                    <div className="flex items-center gap-[15px]">
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                            <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[20px] mt-[20px]">
                    <img src="/assets/img/swiper_image.jpg" className="w-[270px] max-w-[270px] min-w--[270px] h-[180px] object-cover" />
                    <div>
                        <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                        <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">Объявление о формировании электронной базы данных экспертов для оценки проектных предложений</p>
                        <div className="flex items-center gap-[15px]">
                            <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                    <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                            </div>
                        </div>
                        <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">09/01/2024 Объявление О формировании электронной базы данных экспертов для оценки проектных предложений Аламудунский айыл окмоту, согласно постановления Аламудунского айылного кенешаот 23.09.2022г. № 109-28, об утверждении</p>
                    </div>
                </div>
                <div className="flex gap-[20px] mt-[20px]">
                    <img src="/assets/img/swiper_image.jpg" className="w-[270px] max-w-[270px] min-w--[270px] h-[180px] object-cover" />
                    <div>
                        <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                        <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">Объявление о формировании электронной базы данных экспертов для оценки проектных предложений</p>
                        <div className="flex items-center gap-[15px]">
                            <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                    <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                            </div>
                        </div>
                        <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">09/01/2024 Объявление О формировании электронной базы данных экспертов для оценки проектных предложений Аламудунский айыл окмоту, согласно постановления Аламудунского айылного кенешаот 23.09.2022г. № 109-28, об утверждении</p>
                    </div>
                </div>
                <div className="flex gap-[20px] mt-[20px]">
                    <img src="/assets/img/swiper_image.jpg" className="w-[270px] max-w-[270px] min-w--[270px] h-[180px] object-cover" />
                    <div>
                        <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                        <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">Объявление о формировании электронной базы данных экспертов для оценки проектных предложений</p>
                        <div className="flex items-center gap-[15px]">
                            <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                    <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                            </div>
                        </div>
                        <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">09/01/2024 Объявление О формировании электронной базы данных экспертов для оценки проектных предложений Аламудунский айыл окмоту, согласно постановления Аламудунского айылного кенешаот 23.09.2022г. № 109-28, об утверждении</p>
                    </div>
                </div>
                <div className="flex gap-[20px] mt-[20px]">
                    <img src="/assets/img/swiper_image.jpg" className="w-[270px] max-w-[270px] min-w--[270px] h-[180px] object-cover" />
                    <div>
                        <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                        <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">Объявление о формировании электронной базы данных экспертов для оценки проектных предложений</p>
                        <div className="flex items-center gap-[15px]">
                            <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                    <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                            </div>
                        </div>
                        <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">09/01/2024 Объявление О формировании электронной базы данных экспертов для оценки проектных предложений Аламудунский айыл окмоту, согласно постановления Аламудунского айылного кенешаот 23.09.2022г. № 109-28, об утверждении</p>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                    <p className="font-roboto text-[20px] leading-[22px] font-[600] mb-[8px]">Алкоголдук продукцияларды сатууга лицензия алуу жол-жобосу жөнөкөйлөштүрүлдү /Упрощена процедура получения лицензии на реализацию алкогольной продукции.</p>
                    <div className="flex items-center gap-[15px]">
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                            <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[20px] mt-[20px]">
                    <img src="/assets/img/swiper_image.jpg" className="w-[270px] max-w-[270px] min-w--[270px] h-[180px] object-cover" />
                    <div>
                        <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                        <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">Объявление о формировании электронной базы данных экспертов для оценки проектных предложений</p>
                        <div className="flex items-center gap-[15px]">
                            <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                    <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                            </div>
                        </div>
                        <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">09/01/2024 Объявление О формировании электронной базы данных экспертов для оценки проектных предложений Аламудунский айыл окмоту, согласно постановления Аламудунского айылного кенешаот 23.09.2022г. № 109-28, об утверждении</p>
                    </div>
                </div>
                <div className="flex gap-[20px] mt-[20px]">
                    <img src="/assets/img/swiper_image.jpg" className="w-[270px] max-w-[270px] min-w--[270px] h-[180px] object-cover" />
                    <div>
                        <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                        <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">Объявление о формировании электронной базы данных экспертов для оценки проектных предложений</p>
                        <div className="flex items-center gap-[15px]">
                            <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                    <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                            </div>
                        </div>
                        <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">09/01/2024 Объявление О формировании электронной базы данных экспертов для оценки проектных предложений Аламудунский айыл окмоту, согласно постановления Аламудунского айылного кенешаот 23.09.2022г. № 109-28, об утверждении</p>
                    </div>
                </div>
                <div className="flex gap-[20px] mt-[20px]">
                    <img src="/assets/img/swiper_image.jpg" className="w-[270px] max-w-[270px] min-w--[270px] h-[180px] object-cover" />
                    <div>
                        <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                        <p className="text-[#111111] font-roboto text-[20px] leading-[23px] font-[600] mb-[5px]">Объявление о формировании электронной базы данных экспертов для оценки проектных предложений</p>
                        <div className="flex items-center gap-[15px]">
                            <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by adminalamudun</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">5</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                                    <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[#999] text-[12px] font-roboto font-[400]">10</p>
                            </div>
                        </div>
                        <p className="text-[#666] font-roboto font-[400] text-[14px] leading-[20px] mt-[10px]">09/01/2024 Объявление О формировании электронной базы данных экспертов для оценки проектных предложений Аламудунский айыл окмоту, согласно постановления Аламудунского айылного кенешаот 23.09.2022г. № 109-28, об утверждении</p>
                    </div>
                </div>
                <div className="flex gap-[10px] mt-[20px]">
                    <button className="w-[32px] h-[32px] flex items-center justify-center border border-solid border-[#dedede] text-[#111111] leading-[32px] text-[14px] font-roboto font-[600] text-white bg-base_blue border-base_blue">1</button>
                    <button className="w-[32px] h-[32px] flex items-center justify-center border border-solid border-[#dedede] text-[#111111] leading-[32px] text-[14px] font-roboto font-[600]">2</button>
                    <button className="w-[32px] h-[32px] flex items-center justify-center border border-solid border-[#dedede] text-[#111111] leading-[32px] text-[14px] font-roboto font-[600]">...</button>
                    <button className="w-[32px] h-[32px] flex items-center justify-center border border-solid border-[#dedede] text-[#111111] leading-[32px] text-[14px] font-roboto font-[600]">12</button>
                </div>
            </div>
            <AssideRight />
        </main>
    )
}
