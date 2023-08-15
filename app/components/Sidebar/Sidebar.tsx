import Image from 'next/image'
import Link from 'next/link'
import localImage from '@/../public/C-lang.png'
import { BsBookFill } from 'react-icons/bs'
import { useMemo } from 'react'
import { SidebarItems } from '@/components/SidebarItems';
import { BoxSide } from '@/components/BoxSidebar'

interface SidebarProps {
  children: React.ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  const routes = useMemo(
    () => [
      {
        icon: BsBookFill,
        label: 'C言語問題一覧',
        href: '/',
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
    <div className='
    flex h-full transition-all 
    duration-400 ease-in-out
    '>
      <div
        className='
          md:flex flex-col 
          h-full w-1/4 
          md:w-[250px] transition-all 
          duration-400 ease-in-out
          '
      >
        <BoxSide>
          <div className='px-4 py-8'>
            <Link href='/' className='flex flex-row'>
              <Image 
              src={localImage} 
              alt='C-image' 
              className='
              w-[30px] h-[30px]
              md:w-[60px] md:h-[60px]
              transition-all duration-400 
              ease-in-out'></Image>
              <p className='
              text-lg md:text-2xl 
              px-1 py-1.5 md:py-3.5 
              transition-all 
              duration-400 ease-in-out
              '>C言語勉強会</p>
            </Link> 
          </div>
          <div
            className='
              flex flex-col
              gap-y-4 px-5
              md:px-7 pb-8 
              text-sm transition-all 
              duration-400 ease-in-out
              '
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
