import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../config/const.config';

@Pipe({
  name: 'btc2Usd',
})
export class Btc2UsdPipe implements PipeTransform {
  transform(amount: number, isBtc2Usd = true): number {
    return isBtc2Usd ? amount * APP_CONST.btcUsd : amount / APP_CONST.btcUsd;
  }
}
