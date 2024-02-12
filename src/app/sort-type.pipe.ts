import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'sortType',
  standalone: true
})
export class SortTypePipe implements PipeTransform {

  transform(contentList:Content[],types?:string) {
    return contentList.filter(c=>c.type ==types ? c.type?.length:null);
  }

}
