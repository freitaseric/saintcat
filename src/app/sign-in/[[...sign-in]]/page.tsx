import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignInPage() {
	return (
		<main className="flex flex-col gap-2 w-screen justify-start items-center">
			<SignIn
				appearance={{
					baseTheme: dark,
					captcha: { theme: 'auto' },
				}}
			/>
		</main>
	)
}
