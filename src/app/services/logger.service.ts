import { Service } from "@angular/core";

@Service()
export class LoggerService {
  logs: unknown[] = [];
  log(message: unknown): void {
    console.log('From Logger');
    console.log({ message });
    this.logs.push(message);
  }
}
