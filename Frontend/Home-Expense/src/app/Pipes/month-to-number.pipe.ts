import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthToNumber'
})
export class MonthToNumberPipe implements PipeTransform {
  months : string[] = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'saptember',
    'october',
    'november',
    'december'
  ];
  transform(value: string): string {
   let monthNumber : string = '0';
   this.months.forEach((val, ind) => {
    if(val === value.toLocaleLowerCase())
    {
      monthNumber = (ind + 1).toString();
    }
   });
   return monthNumber;

  }
 

}
