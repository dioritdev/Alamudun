
export default function LinksNo({ title, pathTitle }: { title: string, pathTitle: string }) {
    return (
        <div className="bg-white p-[20px] max-w-[760px] h-[max-content] w-[100%] sticky top-[90px] left-0">
            <div className="flex items-center gap-[5px] text-[#999999] text-[13px] font-roboto leading-[16px] font-[400] mb-[10px]">
                <span>Главная</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#999999" width="8px" height="8px" viewBox="0 0 32 32">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
                </svg>
                <span>{pathTitle}</span>
            </div>
            <h3 className="text-[#111111] leading-[36px] text-[30px] font-roboto font-[600] mb-[40px]">{title}</h3>
            <div className="flex items-center gap-[9px] border border-solid border-[#dedede] py-[10px] px-[20px]">
                <p className="text-[#111111] font-[700] text-[14px] font-roboto leading-[16px]">Поделиться</p>
                <button className="text-[#111] font-[400] leading-[32px] font-roboto text-[14px] flex items-center gap-[7px] border border-solid border-[#dedede] px-[12px] rounded-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 512 512">
                        <path d="M512,216.906c-0.031-29.313-23.781-53.078-53.094-53.094h-75.891c-3.531,0-43.578,0-47.219,0   c-6.953,0.063-13.328,1.094-17.969,1.031c-1.859,0-3.328-0.156-4.188-0.344L313,164.313l-0.156-0.469   c-0.141-0.609-0.281-1.625-0.281-3.094c0-0.906,0.141-2.188,0.25-3.438l30.281-74.875c2.906-7.188,4.281-14.656,4.281-21.969   c0.031-23.188-13.844-45.156-36.656-54.406c-7.156-2.891-14.641-4.281-21.984-4.281c-23.203-0.016-45.141,13.875-54.391,36.672   l-0.047,0.078l-51.359,129.313h0.031c-3.438,8.063-6.203,15.625-8.906,22.156c-4.078,10.031-8.063,17.25-12.766,21.438   c-2.359,2.125-4.922,3.719-8.484,4.969c-3.531,1.219-8.172,2.047-14.391,2.047c-3.781-0.016-7.375,0.422-10.891,1.078H44.5   c-24.594,0-44.5,19.922-44.5,44.5v201.703c0,24.578,19.906,44.484,44.5,44.484h61.578c13.641,0,24.719-11.063,24.719-24.719   v-20.484c4.328,2.531,8.891,4.828,13.797,6.672c17.156,6.5,37.531,9.219,62.063,9.219h191.25c29.313,0,53.094-23.719,53.094-53.047   c0-6.891-1.406-13.453-3.828-19.453c21.156-7,36.453-26.875,36.453-50.375c0.016-9.594-2.688-18.547-7.141-26.25   c6.422-5.25,10.781-12.156,13.266-19.375c2.719-7.75,3.656-15.906,3.656-24.203c0-5.141-1.094-10.141-2.969-15.016   c-1.375-3.469-3.172-6.891-5.375-10.125C501.125,253.938,511.984,236.703,512,216.906z M458.938,243.797h-8.844   c-3.469,0-6.813,1.391-9.25,3.828s-3.844,5.813-3.844,9.25s1.406,6.813,3.844,9.25s5.781,3.844,9.25,3.844   c2.516,0,4.578,0.563,6.594,1.609c2.969,1.516,5.797,4.375,7.75,7.719c1.969,3.281,2.875,7.047,2.813,8.906   c0.031,8.297-1.438,15.078-3.719,19.078c-1.156,2.031-2.391,3.453-3.906,4.594c-1.531,1.125-3.438,2.063-6.344,2.688   c-4.938,1-8.813,4.734-10.031,9.625c-1.234,4.906,0.438,10.031,4.344,13.25c6.094,5.094,9.875,12.313,9.875,20.594   c-0.031,14.844-12.047,26.875-26.922,26.906h-6.234c-5.438,0-10.313,3.344-12.219,8.438c-1.938,5.094-0.531,10.813,3.563,14.438   c5.688,5.078,9.172,12.063,9.172,20.047c-0.016,14.844-12.047,26.859-26.922,26.891h-191.25   c-20.063,0.016-36.031-2.063-48.313-5.969c-9.25-2.938-16.391-6.828-22.172-11.688c-1.938-1.656-3.703-3.469-5.375-5.359V245.5   c2.109-0.531,4.547-0.875,7.625-0.875c11.328,0,21.156-2.047,29.453-6.25c6.188-3.109,11.375-7.406,15.5-12.172   c6.188-7.203,10.219-15.297,13.719-23.484c3.5-8.219,6.5-16.625,10.031-24.906l0.156-0.313l51.328-129.281   c5.109-12.625,17.281-20.266,30.125-20.281c4.047,0,8.172,0.766,12.172,2.391c12.656,5.094,20.297,17.266,20.313,30.141   c0,4.047-0.75,8.156-2.375,12.172l-31,76.672c-0.422,1.016-0.688,2.047-0.844,3.125c-0.391,2.906-0.594,5.656-0.594,8.313   c0,4.875,0.688,9.484,2.484,13.781c1.313,3.219,3.297,6.203,5.734,8.563c3.656,3.594,8.078,5.594,12.031,6.625   c4,1.063,7.719,1.281,11.172,1.297c7.422-0.047,14.109-1.094,17.969-1.031c3.641,0,43.688,0,47.219,0h75.891   c14.844-0.016,26.938,12.047,26.938,26.922C485.813,231.75,473.781,243.781,458.938,243.797z" />
                    </svg>
                    1
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#0d47a1]">
                    <img src="/assets/svg/fc.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
                <button className="h-[32px] w-[32px] flex rounded-[2px] p-[8px] items-center justify-center bg-[#40c4ff]">
                    <img src="/assets/svg/tw.svg" className="h-[100%] w-[100%] object-contain" />
                </button>
            </div>
        </div>
    )
}