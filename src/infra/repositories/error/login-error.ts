export class LoginCreationError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginCreationError'
  }
}

export class LoginUpdateError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginUpdateError'
  }
}

export class LoginFindAllError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginFindAllError'
  }
}

export class LoginFindByIdError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginFindByIdError'
  }
}

export class LoginFindByEmailError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginFindByEmailError'
  }
}

export class LoginFinByLoginAndPasswordError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginFinByLoginAndPasswordError'
  }
}
