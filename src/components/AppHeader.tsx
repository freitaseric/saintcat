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
import { Separator } from './ui/separator'
import { ExternalLinkIcon } from 'lucide-react'

export function AppHeader() {
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
			<div className="flex flex-row justify-between items-center gap-4">
				<nav className="flex flex-row justify-center items-center gap-4">
					<Link
						href="/"
						className="uppercase font-semibold transition-opacity duration-300 hover:opacity-40"
					>
						Início
					</Link>
					<Link
						href="/api/books"
						className="uppercase font-semibold transition-opacity duration-300 hover:opacity-40"
					>
						Livros
					</Link>
				</nav>
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
						<div className="flex flex-row justify-center items-center gap-4 h-6">
							<Link
								href="/admin"
								className="flex flex-row justify-center items-center gap-2 uppercase font-semibold transition-opacity duration-300 hover:opacity-40"
							>
								Painel <ExternalLinkIcon className="h-4" />
							</Link>
							<Separator orientation="vertical" />
							<UserButton
								appearance={{
									baseTheme: dark,
								}}
							/>
						</div>
					</SignedIn>
				</div>
			</div>
		</header>
	)
}
