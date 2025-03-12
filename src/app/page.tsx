import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import type { Book } from './api/books/route'
import { api, normalizeBookType } from '@/utils'
import Image from 'next/image'
import { hash } from 'node:crypto'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

function findLatestReleasedBook(books: Book[]): Book | undefined {
	if (!books || books.length === 0) {
		return
	}

	return books.reduce((latestBook, currentBook) => {
		if (currentBook.releasedAt > latestBook.releasedAt) {
			return currentBook
		}
		return latestBook
	}, books[0])
}

export default async function HomePage() {
	const response = await fetch('http://localhost:3000/api/books', {
		next: { revalidate: 3600 },
	})

	// const latestReleasedBook = undefined
	const latestReleasedBook = findLatestReleasedBook(
		(await response.json()) as Book[],
	)

	return (
		<main className="flex flex-col flex-1 w-screen justify-start items-center gap-4">
			<section className="flex flex-row justify-around items-center w-screen">
				<h1 className="text-2xl font-bold">Boas Vindas!</h1>
			</section>
			<section className="flex flex-col justify-start items-center gap-4">
				<h2 className="text-lg font-semibold">
					👀 Fique de olho nas novidades 👀
				</h2>
				{latestReleasedBook ? (
					<Card
						key={latestReleasedBook.id}
						className="w-3/4"
					>
						<CardHeader>
							<CardTitle>{latestReleasedBook.title}</CardTitle>
							<CardDescription className="flex flex-row justify-start items-center gap-3 h-4">
								<span>
									R$ {latestReleasedBook.price.toLocaleString('pt-br')}
								</span>
								<Separator
									orientation="vertical"
									decorative
								/>
								{latestReleasedBook.type === 'digital' ? (
									<span>
										Categoria: {normalizeBookType(latestReleasedBook.type)}
									</span>
								) : (
									<>
										<span>Em estoque: {latestReleasedBook.stock}</span>
										<Separator
											orientation="vertical"
											decorative
										/>
										<span>
											Categoria: {normalizeBookType(latestReleasedBook.type)}
										</span>
									</>
								)}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-row justify-around w-full items-start gap-8">
								<div className="flex flex-col justify-start items-start gap-4">
									{latestReleasedBook.synopse.map(paragraph => (
										<p
											key={hash('sha256', paragraph)}
											className="text-sm text-zinc-700 dark:text-zinc-400"
										>
											{paragraph}
										</p>
									))}
								</div>
								<Image
									src={latestReleasedBook.capeUrl}
									alt="Capa do Livro"
									width={900 / 4}
									height={1280 / 4}
								/>
							</div>
						</CardContent>
						<Separator decorative />
						<CardFooter className="flex flex-row w-full justify-around items-center">
							<Button variant="secondary">Baixar Prólogo</Button>
							<Button>Adquirir Livro</Button>
						</CardFooter>
					</Card>
				) : (
					<p>Sem novidades por enquanto... 🫤</p>
				)}
			</section>
		</main>
	)
}
