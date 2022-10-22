export class CreateLoginError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'CreateLoginError'
  }
}

export class UpdateLoginError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'UpdateLoginError'
  }
}

export class ValidLoginError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'ValidLoginError'
  }
}

export class FindByIdLoginError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'FindByIdLoginError'
  }
}
