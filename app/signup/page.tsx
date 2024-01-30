"use client"

import { FormEvent, useState } from "react"
import Link from "next/link";
import { BasicInput } from "@/components/BasicInput"
import { BasicButton } from "@/components/BasicButton"

export default function SignIn() {
    const [login, setLogin] = useState({user: "", email: "", password: "", confirmPassword: ""})
    const [erros, setErros] = useState({user: "", email: "", password: "", confirmPassword: ""})

    function validation(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        let erros = {user: "", email: "", password: "", confirmPassword: ""}

        if(login.user.length < 4){
            erros = {...erros, user: "Usuário inválido."}
        }
        if(login.email.length < 6){
            erros = {...erros, email: "Email inválido."}
        }
        if(login.password.length < 5){
            erros = {...erros, password: "Senha inválida."}
        }
        if(login.confirmPassword.length < 5){
            erros = {...erros, confirmPassword: "Senha inválida."}
        }

        setErros(erros)
    }

    return (
        <div className="flex flex-row h-screen w-screen">
            <main className="flex-1 bg-primaryBlack">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="font-bold text-2xl mb-4">Cadastre sua conta</p>
                    <form onSubmit={validation} className="flex flex-col w-3/5">
                        <BasicInput erro={erros.user} onChange={(text)=>setLogin({...login, user: text.target.value})} label="Usuário"/>
                        <BasicInput erro={erros.email} onChange={(text)=>setLogin({...login, email: text.target.value})} label="Email"/>
                        <BasicInput erro={erros.password} onChange={(text)=>setLogin({...login, password: text.target.value})} label="Senha"/>
                        <BasicInput erro={erros.confirmPassword} onChange={(text)=>setLogin({...login, confirmPassword: text.target.value})} label="Confirme sua senha"/>
                        <Link href="/signin" className="self-end mb-4">
                            <p className="text-white text-sm font-semibold cursor-pointer">Não possui uma conta? <span className="text-primaryGreen">Crie aqui</span></p>
                        </Link>
                        <BasicButton text="Criar"/>
                    </form>
                </div>
            </main>
            <aside className="hidden flex-1 flex-col bg-primaryGreen md:flex">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="font-bold text-6xl mt-4">Cadastrar</h1>
                </div>
            </aside>
        </div>
    )
}