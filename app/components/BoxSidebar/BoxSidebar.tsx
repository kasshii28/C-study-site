import { twMerge } from "tailwind-merge";

interface BoxProps{
    children:React.ReactNode;
    className?:string;
}

export function BoxSide({children, className}:BoxProps){

    return (
        <div className={twMerge(`
            bg-blue-600 
            rounded-none
            h-full 
            transition-all 
            duration-300 
            ease-in-out
            ms:w-[100px]`
            , className)}
        >
            {children}
        </div>
    )
}
