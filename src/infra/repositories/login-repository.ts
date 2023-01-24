import { LoginCreationInModel, LoginUpdateInModel, LoginAuthenticationInModel } from '@app/model/input'
import { LoginCreationOutModel, LoginUpdateOutModel, LoginFetchOutModel } from '@app/model/output'
import { LoginContractRepository } from '@core/repositories'
import { Either, right, left } from '@shared/error/etheir'
import {
  LoginCreationError,
  LoginUpdateError,
  LoginFindAllError,
  LoginFindByIdError,
  LoginFindByEmailError,
  LoginFinByLoginAndPasswordError
} from './error/login-error'

export class LoginRepository implements LoginContractRepository {
  async create (login: LoginCreationInModel): Promise<Either<LoginCreationError, LoginCreationOutModel>> {
    try {
      return right({ id: '0' } as any)
    } catch (error: any) {
      return left(new LoginCreationError(error.message))
    }
  }

  async update (login: LoginUpdateInModel): Promise<Either<LoginUpdateError, LoginUpdateOutModel | null>> {
    try {
      return right({} as any)
    } catch (error: any) {
      return left(new LoginUpdateError(error.message))
    }
  }

  async findAll (): Promise<Either<LoginFindAllError, LoginFetchOutModel[]>> {
    try {
      return right({} as any)
    } catch (error: any) {
      return left(new LoginFindAllError(error.message))
    }
  }

  async findById (id: string): Promise<Either<LoginFindByIdError, LoginFetchOutModel | null>> {
    try {
      return right({} as any)
    } catch (error: any) {
      return left(new LoginFindByIdError(error.message))
    }
  }

  async findByEmail (email: string): Promise<Either<LoginFindByEmailError, LoginFetchOutModel | null>> {
    try {
      return right({} as any)
    } catch (error: any) {
      return left(new LoginFindByEmailError(error.message))
    }
  }

  async authenticationLogin (login: LoginAuthenticationInModel): Promise<Either<LoginFinByLoginAndPasswordError, boolean>> {
    try {
      return right({} as any)
    } catch (error: any) {
      return left(new LoginFinByLoginAndPasswordError(error.message))
    }
  }
}
