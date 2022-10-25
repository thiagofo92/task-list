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

export class NotFoundEmailError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'NotFoundEmailError'
  }
}

export class NotFoundPasswordError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'NotFoundPasswordError'
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

export class DeleteLoginError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'DeleteLoginError'
  }
}

export class FindAllLoginError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'DeleteLoginError'
  }
}
