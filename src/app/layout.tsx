import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppHeader } from '@/components'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'SaintCat',
	description: 'Sem ideias',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider localization={ptBR}>
			<html lang="pt-BR">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<AppHeader />
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
