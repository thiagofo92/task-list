import {
  LoginCreationInModel,
  LoginCreationOutModel,
  LoginFetchOutModel,
  LoginAuthenticationInModel,
  LoginUpdateInModel,
  LoginUpdateOutModel
} from '@app/model'
import { LoginRepository } from '@core/repositories/'

export class LoginMockService implements LoginRepository {
  private readonly loginMock: Array<{ id: string } & LoginCreationInModel> = []
  async create (login: LoginCreationInModel): Promise<LoginCreationOutModel> {
    this.loginMock.push({
      id: this.loginMock.length.toString(),
      ...login
    })
    const result: LoginCreationOutModel = {
      id: this.loginMock.length.toString()
    }

    return result
  }

  async update (login: LoginUpdateInModel): Promise<LoginUpdateOutModel | null> {
    const index = this.loginMock.findIndex(item => item.id === login.id)

    if (!index) return null

    this.loginMock[index].nickName = login.nickName
    this.loginMock[index].password = login.password

    return {
      nickName: this.loginMock[index].nickName,
      password: this.loginMock[index].password
    }
  }

  async findAll (): Promise<LoginFetchOutModel[]> {
    const result = this.loginMock.map<LoginFetchOutModel>((value, index) => (
      {
        id: index.toString(),
        nickName: value.nickName,
        email: value.email
      }
    ))

    return result
  }

  async findById (id: string): Promise<LoginFetchOutModel | null> {
    const result = this.loginMock.find(item => item.id === id)

    if (!result) return null

    return {
      id: result?.id,
      email: result?.email,
      nickName: result?.nickName
    }
  }

  async findByEmail (email: string): Promise<LoginFetchOutModel | null> {
    const result = this.loginMock.find(item => item.email === email)

    if (!result) return null

    return result
  }

  async findByLoginAndPassword (login: LoginAuthenticationInModel): Promise<boolean> {
    const result = this.loginMock.find(item => item.email === login.email && item.password === login.password)
    return result !== null
  }
}
