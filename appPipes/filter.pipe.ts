import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search:any){
      if(search.name.indexOf(searchTerm.toLowerCase())>0){
      return search.name.toLowerCase();}
    })
  }

}
