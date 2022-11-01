import { randomUUID } from 'node:crypto'

export class LoginEntity {
  id: string
  email: string
  password: string

  constructor (email: string, password: string) {
    this.id = randomUUID()
    this.email = email
    this.password = password
  }
}
