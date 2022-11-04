
interface Response {
  statusCode: number
  body: any
}

export const ok = (body: any): Response => {
  return {
    statusCode: 200,
    body
  }
}

export const internalError = (error: any): Response => {
  return {
    statusCode: 500,
    body: error.message
  }
}

export const badRequest = (body: any): Response => {
  return {
    statusCode: 400,
    body
  }
}

export const unAuthorized = (body: any): Response => {
  return {
    statusCode: 401,
    body
  }
}
