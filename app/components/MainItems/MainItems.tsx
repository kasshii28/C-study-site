import Link from "next/link";

interface MainItemsProps{
    title:string;
    body:string;
    label:string;
    href:string;
}
export function Mainitems({ title,body,label,href }:MainItemsProps){
  return (
    <Link href={href}></Link>
  )
};