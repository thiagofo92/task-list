import { randomUUID } from 'crypto'

interface Login {
  name: string
  login: string
  password: string
}
export class LoginEntity {
  private readonly id: string
  private readonly name: string
  private readonly login: string
  private readonly password: string

  constructor ({ name, login, password }: Login) {
    this.id = randomUUID()
    this.name = name
    this.login = login
    this.password = password
  }
}
