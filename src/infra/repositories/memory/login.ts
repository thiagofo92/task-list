import { CreateLoginError, UpdateLoginError } from '@core/repositories/error/login-error'
import { LoginModel } from 'app/models/login'
import { LoginEntity } from 'core/entities/LoginEntity'
import { LoginRepository } from 'core/repositories/login'
import { Either, left, right } from 'shared/errors/Either'

const loginMemory: LoginModel[] = [
  {
    id: '1b481f95-a852-484a-be40-ef6653e37101',
    email: 'test@test.com.br',
    password: '1234'
  }
]

export class LoginRepositoryMemory implements LoginRepository {
  async create (login: LoginEntity): Promise<Either<CreateLoginError, LoginModel>> {
    try {
      loginMemory.push(login)
      const newLogin = loginMemory[loginMemory.length - 1]
      return right(newLogin)
    } catch (error: any) {
      return left(new CreateLoginError(error?.stack))
    }
  }

  async valid (login: LoginEntity): Promise<boolean> {
    if (!loginMemory.find(item => login.email === item.email)) return false
    if (!loginMemory.find(item => login.password === item.password)) return false

    return true
  }

  async update (login: LoginEntity): Promise<Either<UpdateLoginError, boolean>> {
    try {
      const index = loginMemory.findIndex(item => item.id === login.id)
      if (index < 0) return right(false)

      loginMemory[index].password = login.password

      return right(true)
    } catch (error: any) {
      return left(new UpdateLoginError(error?.stack))
    }
  }
}
