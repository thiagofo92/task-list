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
