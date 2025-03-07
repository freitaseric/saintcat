'use server'

import { checkRole } from '@/utils'
import { clerkClient } from '@clerk/nextjs/server'

export async function setRole(formData: FormData) {
	const client = clerkClient()

	if (!checkRole('admin')) {
		return { message: 'Not Authorized' }
	}

	try {
		const res = (await client).users.updateUserMetadata(
			formData.get('id') as string,
			{
				publicMetadata: {
					role: formData.get('role'),
				},
			},
		)
		return { message: (await res).publicMetadata }
	} catch (error) {
		return { message: error }
	}
}

export async function removeRole(formData: FormData) {
	const client = await clerkClient()

	try {
		const res = await client.users.updateUserMetadata(
			formData.get('id') as string,
			{
				publicMetadata: { role: null },
			},
		)
		return { message: res.publicMetadata }
	} catch (err) {
		return { message: err }
	}
}
