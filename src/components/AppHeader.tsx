'use client'

import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AppHeader() {
	function isActive(target: string) {
		const pathname = usePathname()

		return pathname.endsWith(target) ? 'text-primary' : ''
	}

	return (
		<header className="flex flex-row justify-between px-8 items-center w-screen py-2 border-b-[1px] border-secondary mb-8">
			<Link href="/">
				<Image
					alt="Website Logo"
					src="/woodmark.png"
					width={128}
					height={64}
					className="transition-transform duration-500 hover:scale-105"
				/>
			</Link>
			<div className="flex flex-row justify-between items-center gap-16">
				<nav className="flex flex-row justify-center items-center gap-4">
					<Link
						href="/"
						className={`uppercase font-semibold transition-color duration-300 hover:text-secondary ${isActive('/')}`}
					>
						Início
					</Link>
				</nav>
				<SignedOut>
					<SignInButton />
					<SignUpButton />
				</SignedOut>
				<SignedIn>
					<Link
						href="/admin"
						className={`uppercase font-semibold transition-color duration-300 hover:text-secondary ${isActive('/admin')}`}
					>
						Admin
					</Link>
					<UserButton />
				</SignedIn>
				{/* <div className="flex flex-row justify-center items-center gap-4">
					<Link
						href="/signup"
						className="uppercase font-bold bg-secondary py-1 px-2 rounded text-white transition duration-500 hover:bg-secondary/50"
					>
						Cadastrar
					</Link>
					<Link
						href="/login"
						className="uppercase font-bold bg-primary py-1 px-2 rounded text-white transition duration-500 hover:bg-primary/50"
					>
						Entrar
					</Link>
				</div> */}
			</div>
		</header>
	)
}
