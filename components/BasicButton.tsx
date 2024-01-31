import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function BasicButton(props: ButtonProps){
    return (
        <button {...props} className="bg-green p-4 rounded-md shadow-md font-bold">
            {props.children}
        </button>
    )
}