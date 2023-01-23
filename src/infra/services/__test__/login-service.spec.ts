import { describe, test, expect, vi } from 'vitest'
import { LoginRepository } from '@core/repositories/login-repository'
import {
  LoginAuthenticationInModel,
  LoginCreationInModel,
  LoginCreationOutModel,
  LoginFetchOutModel,
  LoginUpdateInModel,
  LoginUpdateOutModel
} from '@app/model'

export class LoginService implements LoginRepository {
  async update (login: LoginUpdateInModel): Promise<LoginUpdateOutModel | null> {
    return {} as any
  }

  async findByEmail (email: string): Promise<LoginFetchOutModel | null> {
    return {} as any
  }

  async create (login: LoginCreationInModel): Promise<LoginCreationOutModel> {
    return {} as any
  }

  async findAll (): Promise<LoginFetchOutModel[]> {
    return {} as any
  }

  async findById (id: string): Promise<LoginFetchOutModel> {
    return {} as any
  }

  async findByLoginAndPassword (login: LoginAuthenticationInModel): Promise<boolean> {
    return {} as any
  }
}

describe('#Login service', () => {
  test.todo('Sucess to login')
  test.todo('Login not authorized')
  test.todo('Error to login')
})
