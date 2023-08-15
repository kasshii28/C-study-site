"use client"
import { useRouter } from "next/navigation";

interface HeaderProps{
  children:React.ReactNode
  className?:string;
}
export function Header({ children,className }:HeaderProps){
  const router = useRouter();
  const handleLogout = () =>{

  }
  return (
    <div className="text-neutral-900">Header</div>
  );
};
