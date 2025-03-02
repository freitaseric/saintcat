"use client"

import { Button, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

export function AppHeader() {
  function isActive(target: string) {
    const pathname = usePathname()

    return pathname.endsWith(target) ? "text-primary" : ""
  }

  return (
    <header className="flex flex-row justify-between px-8 items-center w-screen py-2 border-b-[1px] border-secondary mb-4">
      <Link href="/">
        <Image alt="Website Logo" src="/woodmark.png" width={128} height={64} className="transition-transform duration-500 hover:scale-105" />
      </Link>
      <div className="flex flex-row justify-between items-center gap-16">
        <nav className="flex flex-row justify-center items-center gap-4">
          <Link href="/" className={`uppercase font-semibold transition-color duration-300 hover:text-secondary ${isActive('/')}`}>Início</Link>
          <Popover className="relative">
            <PopoverButton
              className="block font-semibold focus:outline-none data-[active]:text-secondary data-[hover]:text-secondary data-[focus]:outline-1 data-[focus]:outline-white uppercase transition duration-300"
            >Livros</PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="flex flex-col bg-secondary/75 text-white py-2 px-4 justify-center items-center rounded-xl backdrop-blur-lg"
            >
              <Link href="/books/1" className={`uppercase font-semibold transition-color duration-300 hover:text-secondary ${isActive('/books/1')}`}>Livro 1</Link>
            </PopoverPanel>
          </Popover>
        </nav>
        <div className="flex flex-row justify-center items-center gap-4">
          <Button className="uppercase font-bold bg-secondary py-1 px-2 rounded text-white transition duration-500 hover:bg-secondary/50">Cadastrar</Button>
          <Button className="uppercase font-bold bg-primary py-1 px-2 rounded text-white transition duration-500 hover:bg-primary/50">Entrar</Button>
        </div>
      </div>
    </header>
  )
}