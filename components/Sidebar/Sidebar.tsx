import Image from "next/image"
import Link from "next/link"
import localImage from "../../public/C-lang.png"
import { BsBookFill } from "react-icons/bs"
import { useMemo } from "react"
import { SidebarItems } from "../SidebarItems/SidebarItems"
import { BoxSide } from "../BoxSidebar/BoxSidebar"

interface SidebarProps {
  children: React.ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  const routes = useMemo(
    () => [
      {
        icon: BsBookFill,
        label: "C言語問題一覧",
        href: "/",
      },
      // {
      //   icon: BsBookFill,
      //   label: "Python問題一覧",
      //   href: "/",
      // },
      // {
      //   icon: BsBookFill,
      //   label: "Javascript問題一覧",
      //   href: "/",
      // },
    ],
    [],
  )

  return (
    <div className="flex h-full">
      <div
        className="
          hidden md:flex flex-col
          h-full w-[300px]
          "
      >
        <BoxSide>
          <div className="px-6 py-8">
            <Link href="/" className="flex flex-row">
              <Image src={localImage} alt="C-image" width={60} height={60}></Image>
              <p className="text-2xl px-2 py-4">C言語勉強会</p>
            </Link>
          </div>
          <div
            className="
              flex
              flex-col
              gap-y-4
              px-12
              pb-8
              hover:text-gray-400
              "
          >
            {routes.map((item) => (
              <SidebarItems key={item.label} {...item} />
            ))}
          </div>
        </BoxSide>
      </div>
      <main>{children}</main>
    </div>
  )
}
