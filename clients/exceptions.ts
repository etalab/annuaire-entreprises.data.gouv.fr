export class HttpNotFound extends Error {
  constructor(public status: number, public message: string) {
    super();
  }
}

export class HttpServerError extends Error {
  constructor(public status: number, public message: string) {
    super();
  }
}

export class HttpAuthentificationFailure extends Error {
  constructor(public message: string) {
    super();
  }
}
export class HttpTooManyRequests extends Error {
  constructor(public status: number, public message: string) {
    super();
  }
}
