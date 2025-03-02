import { prisma } from "@/lib"
import { NextResponse } from "next/server"

export const GET = async () => {
  const users = await prisma.user.findMany({
    omit: {
      password: true
    }
  })

  return NextResponse.json(users)
}