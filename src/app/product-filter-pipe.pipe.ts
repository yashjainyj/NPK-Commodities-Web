import { Pipe, PipeTransform } from '@angular/core';
import { UserDetail } from './user-detail.model';

@Pipe({
  name: 'productFilterPipe'
})
export class ProductFilterPipePipe implements PipeTransform {
  transform(value:UserDetail[],filterBy:string):UserDetail[] {
    filterBy= filterBy? filterBy.toLocaleLowerCase():null;
    if(filterBy)
    {
      return value.filter((product:any)=>
      product.userDetails.fname.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }
    else
    return value;
}

}
