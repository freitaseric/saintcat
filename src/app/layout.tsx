import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppHeader } from '@/components'
import { ClerkProvider } from '@clerk/nextjs'

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
		<ClerkProvider>
			<html lang="pt-BR">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
				>
					<AppHeader />
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
