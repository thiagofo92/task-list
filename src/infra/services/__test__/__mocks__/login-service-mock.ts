import {
  LoginCreationInModel,
  LoginAuthenticationInModel,
  LoginUpdateInModel
} from '@app/model/input'

import {
  LoginUpdateOutModel,
  LoginCreationOutModel,
  LoginFecthOutModel
} from '@app/model/output'

import {
  LoginCreationError,
  LoginFinByLoginAndPasswordError,
  LoginFindAllError,
  LoginFindByEmailError,
  LoginFindByIdError,
  LoginUpdateError
} from '@infra/services/error/login-error'
import { LoginRepository } from '@core/repositories/'
import { Either, right } from '@shared/error/etheir'

export class LoginMockService implements LoginRepository {
  private readonly loginMock: Array<{ id: string } & LoginCreationInModel> = []
  async create (login: LoginCreationInModel): Promise<Either<LoginCreationError, LoginCreationOutModel>> {
    const id = String(this.loginMock.length)
    this.loginMock.push({
      id,
      ...login
    })
    const result: LoginCreationOutModel = { id }

    return right(result)
  }

  async update (login: LoginUpdateInModel): Promise<Either<LoginUpdateError, LoginUpdateOutModel | null>> {
    const index = this.loginMock.findIndex(item => item.id === login.id)

    if (index < 0) return right(null)

    this.loginMock[index].nickName = login.nickName
    this.loginMock[index].password = login.password

    return right({
      nickName: this.loginMock[index].nickName,
      password: this.loginMock[index].password
    })
  }

  async findAll (): Promise<Either<LoginFindAllError, LoginFecthOutModel[]>> {
    const result = this.loginMock.map<LoginFecthOutModel>((value, index) => (
      {
        id: index.toString(),
        nickName: value.nickName,
        email: value.email,
        password: value.password
      }
    ))

    return right(result)
  }

  async findById (id: string): Promise<Either<LoginFindByIdError, LoginFecthOutModel | null>> {
    const result = this.loginMock.find(item => item.id === id)

    if (!result) return right(null)

    return right({
      id: result.id,
      email: result.email,
      nickName: result.nickName,
      password: result.password
    })
  }

  async findByEmail (email: string): Promise<Either<LoginFindByEmailError, LoginFecthOutModel | null>> {
    const result = this.loginMock.find(item => item.email === email)

    if (!result) return right(null)

    return right(result)
  }

  async findByLoginAndPassword (login: LoginAuthenticationInModel): Promise<Either<LoginFinByLoginAndPasswordError, boolean>> {
    const result = this.loginMock.find(item => item.email === login.email && item.password === login.password)
    return right(result !== null)
  }
}
