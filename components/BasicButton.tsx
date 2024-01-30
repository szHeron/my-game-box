import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function BasicButton(props: ButtonProps){
    return (
        <button {...props} className="bg-primaryGreen p-4 rounded-md shadow-md font-bold">
            {props.text}
        </button>
    )
}