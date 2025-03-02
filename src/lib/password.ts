import { compare, genSalt, hash } from "bcrypt";

export async function hashPassword(password: string) {
  const rounds = 10
  const salt = await genSalt(rounds)

  return await hash(password, salt)
}

export async function validatePassword(password: string, hash: string) {
  return await compare(password, hash)
}