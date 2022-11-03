import { LoginModel } from '@app/models'

export interface LoginCreateUseCase {
  execute: () => Promise<LoginModel>
}
