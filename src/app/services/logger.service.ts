import { Service } from "@angular/core";

@Service()
export class LoggerService {

  log(message: unknown): void {
    console.log('From Logger');
    console.log({ message });
  }
}
