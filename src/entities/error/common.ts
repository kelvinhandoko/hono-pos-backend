export class NotFoundError extends Error {
  constructor(message = 'Resource Not Found') {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class ConflictError extends Error {
  constructor(message = 'Conflict Error') {
    super(message)
    this.name = 'ConflictError'
  }
}

export class BadRequestError extends Error {
  constructor(message = 'Bad Request') {
    super(message)
    this.name = 'BadRequestError'
  }
}
