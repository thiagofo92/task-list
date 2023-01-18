import { randomUUID } from 'crypto'

interface Login {
  nickName: string
  login: string
  password: string
}
export class LoginEntity {
  private readonly id: string
  private readonly nickName: string
  private readonly login: string
  private readonly password: string

  constructor ({ nickName, login, password }: Login) {
    this.id = randomUUID()
    this.nickName = nickName
    this.login = login
    this.password = password
  }
}
