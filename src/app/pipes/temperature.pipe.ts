import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

transform(value: number): string {
    const temp = Math.floor(value);
    return temp + 'ºC';
}

}
