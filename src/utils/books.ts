import type { Book } from '@/app/api/books/route'

export const normalizeBookType = (type: Book['type']) => {
	return type === 'digital' ? 'E-Book' : 'Livro Físico'
}
