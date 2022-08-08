import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    var hours = Math.floor(value / 60);
    var minutes = Math.floor(value % 60);
    const postfix = hours > 1 ? ' hrs' : ' hr';
    return `${hours}:${minutes} ${postfix}`;
  }
}
