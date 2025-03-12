import { randomUUID, type UUID } from 'node:crypto'
import { type NextRequest, NextResponse } from 'next/server'

const booksMock: Book[] = [
	{
		id: randomUUID(),
		title: 'The Storm Fall - Cap. 1',
		synopse: [
			'"E viu-se no céu um grande sinal: uma tempestade caiu sobre a Terra, e com ela vieram os ecos do princípio e do fim."',
			'Seis jovens foram levados além do tempo, forçados a enfrentar forças que desafiam a própria criação. Para impedir a ascensão de algo que não deveria existir, precisam reunir os Fragmentos da Joia do Éden, um artefato cujos pedaços se espalharam pelo tempo.',
			'Mas cada batalha travada, cada inimigo derrotado, é apenas um prenúncio do que realmente se aproxima. Os anjos observam. Os demônios se preparam. O mundo se move rumo a um destino inevitável. A tempestade caiu. E aquilo que dorme… está despertando.',
		],
		capeUrl: '/assets/book-1.jpg',
		stock: -1,
		price: 4.99,
		type: 'digital',
		releasedAt: new Date(2024, 9, 29, 6, 30, 24),
	},
]

export interface Book {
	id: UUID
	title: string
	synopse: string[]
	capeUrl: string
	stock: number
	price: number
	type: 'digital' | 'physics'
	releasedAt: Date
}

const findById = (id: UUID) => {
	const result = booksMock.filter(book => book.id === id)
	if (result.length <= 0) return undefined
	return result[0]
}

const insertOne = (newBook: Omit<Book, 'id'>) => {
	booksMock.push({ id: randomUUID(), ...newBook })
}

export async function GET(): Promise<NextResponse> {
	return NextResponse.json(booksMock)
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	const newBook = (await request.json()) as Omit<Book, 'id'>
	insertOne(newBook)

	return NextResponse.json({}, { status: 201, statusText: 'Created' })
}
