export interface LoginCreationInModel {
  nickName: string
  email: string
  password: string
}

export interface LoginAuthenticationInModel {
  email: string
  password: string
}

export interface LoginFetchOutModel {
  id: string
  nickName: string
  email: string
}

export interface LoginCreationOutModel {
  id: string
}
