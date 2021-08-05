import { IError } from "../interfaces/IError";

class Errors {
  errors: IError[];

  constructor(error: IError) {
    this.errors = [error];
  }

  public add(error: IError) {
    this.errors.push(error);
  }
}

export { Errors };
