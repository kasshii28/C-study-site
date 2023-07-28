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
            items-center
            w-full
            gap-x-4
            text-xl
            cursor-pointer
            hover:text-white
            transition
            text-white-600
            py-1    
        `)}
        >
            <Icon size={36}/>
            <p className="truncate w-full">{label}</p>
        </Link>
    )
};