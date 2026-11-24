import { inject, Injectable, Service } from "@angular/core";
import { LoggerService } from "./logger.service";

@Service()
export class SayHello {
  loggerService = inject(LoggerService);
  hello() {
    this.loggerService.log('Hello le monde');
  }
}
