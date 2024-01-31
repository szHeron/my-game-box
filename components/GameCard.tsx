import Image from "next/image"

interface GameInfo {
    url: string;
    name: string;
    platform: string;
    developer: string;
}

export function GameCard(props: GameInfo){
    return (
        <div className="flex flex-col bg-tertiaryBlue p-2 rounded-md max-w-[512px]">
            <Image 
                width={312} 
                height={312} 
                src={props.url} 
                alt={props.name} 
                priority
            />
            <p className="font-medium text-white text-lg mt-2">{props.name}</p>
            <div className="flex flex-row items-center justify-between">
                <p>{props.developer}</p>
                <div className="bg-green p-2 w-max rounded-md">
                    <p>{props.platform}</p>
                </div>
            </div>
        </div>
    )
}