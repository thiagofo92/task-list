import { randomUUID } from 'node:crypto'

interface Login {
  email: string
  password: string
  name: string
}
export class LoginEntity {
  id: string
  email: string
  password: string
  name: string

  constructor ({ email, password, name }: Login) {
    this.id = randomUUID()
    this.name = name
    this.email = email
    this.password = password
  }
}
