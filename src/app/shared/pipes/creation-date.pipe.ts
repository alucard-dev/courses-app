import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {
  transform(value: string) {
    var datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'DD.MM.YYYY');
  }
}
