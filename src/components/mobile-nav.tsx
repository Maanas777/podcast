'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { cn } from '@/lib/utils'


const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section>
      <Sheet>
    <SheetTrigger className='text-white-2 '>
    <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
    </SheetTrigger>
    <SheetContent className='side-left backdrop-blur-2xl border-none'>
      <SheetHeader>
        <SheetTitle className='hidden'>Are you absolutely sure?</SheetTitle>
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-4 pb-10 p-2"
        >
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white-1 ">
            Podcastr
          </h1>
        </Link>

        <div>
    <SheetClose asChild>
      <nav>
        {sidebarLinks.map(({ route, label, imgURL })=>{

        const isActive = pathname === route || pathname.startsWith(`${route}/`);
        return <SheetClose asChild key={route}><Link href={route} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-start", {
          'bg-nav-focus border-r-4 border-orange-1': isActive
        })}>
          <Image src={imgURL} alt={label} width={24} height={24} />
          <p className='font-bold text-white-5'>{label}</p>
        </Link></SheetClose>

        })}
      </nav>

    </SheetClose>

        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  </section>
  )
}

export default MobileNav