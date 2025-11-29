import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideurl'
})
export class HideUrlPipe implements PipeTransform {

  transform(value: string): string {
    
    if(!value || typeof value !== 'string') return '';

    try{
      const urlSegments = value.split('/').filter(Boolean);
      const type = urlSegments.at(-2);
      const id = urlSegments.at(-1);

      if(!type || !id) return '';

      return `${type}/${id}`;

    }catch{
      return ''
    }
  }

}
