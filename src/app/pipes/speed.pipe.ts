import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(value: number): string {
    const temp = Math.floor(value);
    return temp + 'mph';
}

}
