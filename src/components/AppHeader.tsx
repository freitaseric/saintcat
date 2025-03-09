'use client'

import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import { dark } from '@clerk/themes'
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
			<div className="flex flex-row justify-between items-center gap-8">
				<nav className="flex flex-row justify-center items-center gap-4">
					<Link
						href="/"
						className={`uppercase font-semibold transition-color duration-300 hover:text-secondary ${isActive('/')}`}
					>
						Início
					</Link>
				</nav>
				<span className="h-8 w-px bg-secondary" />
				<div>
					<SignedOut>
						<div className="flex flex-row justify-center items-center gap-2">
							<SignUpButton>
								<button
									type="button"
									className="bg-secondary px-4 py-2 rounded-xl uppercase text-black font-bold"
								>
									Cadastrar-se
								</button>
							</SignUpButton>
							<SignInButton>
								<button
									type="button"
									className="bg-primary px-4 py-2 rounded-xl uppercase text-black font-bold"
								>
									Entrar
								</button>
							</SignInButton>
						</div>
					</SignedOut>
					<SignedIn>
						<Link
							href="/admin"
							className={`uppercase font-semibold transition-color duration-300 hover:text-secondary ${isActive('/admin')}`}
						>
							Admin
						</Link>
						<UserButton
							appearance={{
								baseTheme: dark,
							}}
						/>
					</SignedIn>
				</div>
			</div>
		</header>
	)
}
