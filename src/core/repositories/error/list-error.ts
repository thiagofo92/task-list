export class ListCreateError extends Error {
  constructor (message?: string) {
    super(message)
    this.name = 'ListCreateError'
  }
}

export class ListUpdateError extends Error {
  constructor (message?: string) {
    super(message)
    this.name = 'ListUpdateError'
  }
}
