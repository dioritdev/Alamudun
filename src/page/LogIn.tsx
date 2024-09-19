
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../axios";

export default function LogIn() {
    const location = useNavigate()
    const [error, setError] = useState({
        email: "",
        password: "",
    })

    const handle__Submit = (e: any) => {
        e.preventDefault()

        let a = new FormData(e.target)
        let b = Object.fromEntries(a.entries())

        API.post("auth/login/", b)
            .then((res: any) => {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data))
                location("/")
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
                password: "",
            }
        })
    }

    return (
        <div className="flex items-center justify-center w-[100%] h-[100dvh]">
            <form className="max-w-[500px] w-[100%] rounded-[12px] bg-[#d3d3d3] p-[20px] py-[50px] flex flex-col gap-[20px] px-[5%]" onChange={handle__Change} onSubmit={handle__Submit}>
                <h1 className="text-[30px] font-[500] font-roboto text-center leading-[20px]">Вход</h1>
                <label>
                    <p className="text-[15px] font-roboto font-[400] leading-[20px] mb-[5px]">Email</p>
                    <input type="text" placeholder="Введите email..." required name="email" className={`w-[100%] outline-none h-[50px] px-[10px] text-[18px] font-roboto font-[400] leading-[20px] rounded-[6px] ${!!error.email ? "border-b border-solid border-b-[red]" : ""}`} />
                    <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.email}</p>
                </label>
                <label>
                    <p className="text-[15px] font-roboto font-[400] leading-[20px] mb-[5px]">Пороль</p>
                    <input type="text" placeholder="Введите пороль..." required name="password" className={`w-[100%] outline-none h-[50px] px-[10px] text-[18px] font-roboto font-[400] leading-[20px] rounded-[6px] ${!!error.password ? "border-b border-solid border-b-[red]" : ""}`} />
                    <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.password}</p>
                </label>
                <button type="submit" className="border border-solid text-base_blue hover:bg-base_blue hover:text-white duration-200 border-base_blue w-[50%] max-w-[50%] mx-auto rounded-[8px] h-[50px] text-[20px]">Отправить</button>
                <div className="text-[14px] text-center font-[400] leading-[18px]">Нет учётной записи? <Link to="/registration" className="underline text-base_blue">Зарегистрироваться</Link></div>
            </form>
        </div>
    )
}
