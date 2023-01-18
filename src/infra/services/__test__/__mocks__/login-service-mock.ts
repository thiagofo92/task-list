import { LoginCreationInModel, LoginCreationOutModel, LoginFetchOutModel, LoginAuthenticationInModel } from '@app/model'
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

  async findByLoginAndPassword (login: LoginAuthenticationInModel): Promise<boolean> {
    const result = this.loginMock.find(item => item.email === login.email && item.password === login.password)
    return result !== null
  }
}
