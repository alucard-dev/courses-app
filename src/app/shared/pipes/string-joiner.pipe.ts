import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner',
})
export class StringJoinerPipe implements PipeTransform {
  transform(array: string[], joiner: string) {
    return array.join(joiner);
  }
}
