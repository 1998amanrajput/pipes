import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toLocaleUpperCase() + value.substring(1, value.length);
  }

}
