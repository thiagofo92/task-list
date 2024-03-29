export class LoginUseCaseCreationError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginUseCaseCraetionError'
  }
}

export class LoginUseCaseUpdateError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginUseCaseUpdateError'
  }
}

export class LoginUseCaseFindAllError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginUseCaseFindAllError'
  }
}

export class LoginUseCaseFindByIdError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginUseCaseFindByIdError'
  }
}

export class LoginUseCaseFindByEmailError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'LoginUseCaseFindByEmailError'
  }
}
