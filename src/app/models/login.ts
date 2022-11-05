import { LoginEntity } from 'core/entities/LoginEntity'

export type LoginModel = LoginEntity

export type LoginCreateModel = Omit<LoginModel, 'id'>
