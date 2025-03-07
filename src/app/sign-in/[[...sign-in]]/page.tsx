import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
	return (
		<main className="flex flex-col gap-2 w-screen justify-start items-center">
			<SignIn />
		</main>
	)
}
