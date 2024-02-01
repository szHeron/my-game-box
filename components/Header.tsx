import Link from "next/link";
import { BasicButton } from "./BasicButton";

export function Header(){
    return (
        <div className="flex flex-row items-center justify-around h-[8%] bg-secundaryBlue md:justify-between md:px-32">
            <Link href="/">
                <h1 className="text-3xl font-bold">
                    Gamebox
                </h1>
            </Link>
            <Link href="/signin">
                <BasicButton>
                    Login
                </BasicButton>
            </Link>
        </div>
    )
}