import { LoginEntity } from 'core/entities/LoginEntity'

export interface LoginGateway {
  valid: (login: LoginEntity) => Promise<boolean>
  create: (login: LoginEntity) => Promise<LoginEntity>
  update: (login: LoginEntity) => Promise<boolean>
  del: (id: string) => Promise<boolean>
  findById: (id: string) => Promise<LoginEntity>
  findAll: () => Promise<LoginEntity[]>
}
