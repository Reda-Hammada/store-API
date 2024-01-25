class ErrorClass extends Error {
  public throwValidationError(message: any) {
    this.name = "ValidationError";
    this.message = message;
    this.message;
    throw this;
  }

  public throwAuthenticationError(message: any) {
    this.name = "AuthenticationError";
    this.message = message;
    this.message;
    throw this;
  }

  public throwNotFoundError(message: any) {
    this.name = "NotFoundError";
    this.message = message;
    throw this;
  }

  public throwAuthorizationError(message: any) {
    this.name = "AuthorizationError";
    this.message = message;
    throw this;
  }
}

export default ErrorClass;
