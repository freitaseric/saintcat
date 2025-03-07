'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
	const router = useRouter()

	return (
		<main className="grid grid-cols-2 grid-rows-2 w-screen justify-items-center">
			<div className="flex flex-col justify-center items-start">
				<h2 className="text-xl font-medium">404</h2>
				<h1 className="text-2xl font-bold">Página não Encotrada!</h1>
			</div>
			<Image
				alt="Ilustração"
				src="/404.png"
				width={256}
				height={256}
			/>
			<div className="col-span-2 flex flex-row justify-center items-center gap-16">
				<Link
					href="/"
					className="p-2 bg-primary text-white rounded transition-transform duration-300 hover:scale-110"
				>
					Voltar ao Início
				</Link>
				<button
					type="button"
					onClick={router.refresh}
					className="cursor-pointer p-2 bg-secondary text-black rounded transition-transform duration-300 hover:scale-110"
				>
					Recarregar Página
				</button>
			</div>
		</main>
	)
}
