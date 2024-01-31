"use client"

import { FormEvent, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BasicInput } from "@/components/BasicInput"
import { BasicButton } from "@/components/BasicButton"
import illustration from "../../assets/gaming_login_image.svg"

export default function SignIn() {
    const [login, setLogin] = useState({email: "", password: ""})
    const [erros, setErros] = useState({email: "", password: ""})

    function validation(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        let erros = {email: "", password: ""}

        if(login.email.length < 6){
            erros = {...erros, email: "Email inválido."}
        }

        if(login.password.length < 5){
            erros = {...erros, password: "Senha inválida."}
        }

        setErros(erros)
    }

    return (
        <div className="flex flex-row h-screen w-screen">
            <main className="flex-1 bg-primaryBlack">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="font-bold text-2xl mb-4">Entre na sua conta</p>
                    <form onSubmit={validation} className="flex flex-col w-3/5">
                        <BasicInput erro={erros.email} onChange={(text)=>setLogin({...login, email: text.target.value})} label="Email"/>
                        <BasicInput erro={erros.password} onChange={(text)=>setLogin({...login, password: text.target.value})} label="Senha"/>
                        <Link href="/signup" className="self-end mb-4">
                            <p className="text-white text-sm font-semibold cursor-pointer">Já possui uma conta? <span className="text-green">Entre aqui</span></p>
                        </Link>
                        <BasicButton text="Entrar"/>
                    </form>
                </div>
            </main>
            <aside className="hidden flex-1 flex-col bg-green md:flex">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="font-bold text-6xl mt-4">Entrar</h1>
                </div>
            </aside>
        </div>
    )
}