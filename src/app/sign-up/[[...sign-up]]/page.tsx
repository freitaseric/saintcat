import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignUpPage() {
	return (
		<main className="flex flex-col gap-2 w-screen justify-start items-center">
			<SignUp
				appearance={{
					baseTheme: dark,
				}}
			/>
		</main>
	)
}
