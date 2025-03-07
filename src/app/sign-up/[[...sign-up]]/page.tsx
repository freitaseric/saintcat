import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
	return (
		<main className="flex flex-col gap-2 w-screen justify-start items-center">
			<SignUp />
		</main>
	)
}
