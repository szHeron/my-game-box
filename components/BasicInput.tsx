import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    erro?: string;
}

export function BasicInput(props: InputProps){
    return (
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input
                className="bg-gray text-white mb-4 p-2 rounded w-full"
                {...props}
            />
            <span className="text-[#ff3333] self-end">{props.erro}</span>
        </div>
    )
}