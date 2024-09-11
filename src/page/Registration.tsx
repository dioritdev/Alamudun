
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../axios"

export default function Registration() {
    const [error, setError] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password1: "",
        password2: "",
        phone: ""
    })
    const location = useNavigate()

    const handle__Submit = (e: any) => {
        e.preventDefault()

        let a = new FormData(e.target)
        let b = Object.fromEntries(a.entries())

        API.post("/auth/register/", b)
            .then((res: any) => {
                localStorage.setItem("token", res.data.token)
                location("/login")
            })
            .catch((res: any) => {
                setError((prev: any) => {
                    return {
                        ...prev,
                        ...res.response.data
                    }
                })
            })
    }

    const handle__Change = () => {
        setError(() => {
            return {
                email: "",
                first_name: "",
                last_name: "",
                password1: "",
                password2: "",
                phone: ""
            }
        })
    }

    return (
        <div className="flex items-center justify-center w-[100%] h-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <form className="max-w-[80%] w-[100%] rounded-[12px] bg-[#d3d3d3] p-[20px] flex flex-col gap-[20px] px-[5%]" onChange={handle__Change} onSubmit={handle__Submit}>
                <h1 className="text-[30px] font-[500] font-roboto text-center leading-[20px]">Registration</h1>
                <input type="text" placeholder="avatar" name="avatar" className="w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px]" />
                <div className="flex gap-[20px] w-[100%]">
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Name</p>
                        <input type="text" placeholder="Enter your name" name="first_name" className={`w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px] ${!!error.first_name ? "border-b border-solid border-b-[red]" : ""}`} />
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.first_name}</p>
                    </label>
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Surname</p>
                        <input type="text" placeholder="Enter your surname" name="last_name" className={`w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px] ${!!error.last_name ? "border-b border-solid border-b-[red]" : ""}`} />
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.last_name}</p>
                    </label>
                </div>
                <div className="flex gap-[20px]">
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Password</p>
                        <input type="text" placeholder="Enter your password" required name="password1" className={`w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px] ${!!error.password1 ? "border-b border-solid border-b-[red]" : ""}`} />
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.password1}</p>
                    </label>
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Confirm password</p>
                        <input type="text" placeholder="Confirm your password" required name="password2" className={`w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px] ${!!error.password2 ? "border-b border-solid border-b-[red]" : ""}`} />
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.password2}</p>
                    </label>
                </div>
                <div className="flex gap-[20px] w-[100%]">
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Email</p>
                        <input type="text" placeholder="Enter your email" name="email" required className={`w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px] ${!!error.email ? "border-b border-solid border-b-[red]" : ""}`} />
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.email}</p>
                    </label>
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Phone</p>
                        <input type="tel" placeholder="Enter your phone" name="phone" required className={`w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px] ${!!error.phone ? "border-b border-solid border-b-[red]" : ""}`} />
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.phone}</p>
                    </label>
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Должность</p>
                        <select name="role" className="w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px]">
                            <option value="chapter" selected>Глава</option>
                            <option value="deputy_head">Заместитель главы - отвественный секретарь</option>
                            <option value="head_of_department">Начальник отдела социально-экономического развития</option>
                            <option value="chief_specialist">Главный специалист</option>
                            <option value="leading_specialist">Ведущий специалист</option>
                            <option value="specialist">Специалист</option>
                            <option value="starasta">Стараста</option>
                            <option value="technical_support_staff">МОБ топ</option>
                            <option value="сontract_worker">Работник по контракту</option>
                        </select>
                    </label>
                </div>
                <div className="flex gap-[20px] w-[100%]">
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Биография</p>
                        <input type="text" placeholder="Enter your bio" name="bio" required className="w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px]" />
                    </label>
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Трудовая деятельность</p>
                        <input type="text" placeholder="Enter your labor activity" name="labor_activity" required className="w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px]" />
                    </label>
                    <label className="w-[100%]">
                        <p className="text-[14px] font-roboto font-[400] leading-[18px] mb-[5px]">Образование</p>
                        <input type="text" placeholder="Enter your education" name="education" required className="w-[100%] outline-none h-[30px] px-[10px] text-[13px] font-roboto font-[400] leading-[18px] rounded-[6px]" />
                    </label>
                </div>

                <button type="submit" className="border border-solid text-base_blue hover:bg-base_blue hover:text-white duration-200 border-base_blue w-[50%] max-w-[50%] mx-auto rounded-[8px] h-[40px]">Отправить</button>
            </form>
        </div>
    )
}