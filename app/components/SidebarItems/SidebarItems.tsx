import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemsProps{
    icon: IconType,
    label: string,
    href: string;
}

export function SidebarItems({ icon:Icon, label, href }:SidebarItemsProps){
    return (
        <Link
        href={href}
        className={twMerge(`
            flex
            flex-row
            h-fill
            w-full
            items-center
            gap-x-4
            text-1/2
            md:text-xl
            cursor-pointer
            hover:text-white
            transition
            text-white-600
            py-1
        `)}
        >
            <Icon className="
            w-[25px] h-[25px]
            md:w-[35px] md:h-[35px]
            transition-all duration-400 
            ease-in-out
            "/>
            <p className="
            truncate w-full
            transition-all duration-400 
            ease-in-out
            ">{label}</p>
        </Link>
    )
};