import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { map, finalize } from 'rxjs/operators';
import { ProductDetails } from 'app/product-details.model';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  snipper:boolean = true;
  constructor(private productService : ProductService) { }
  order : any=null;
  detail  : any[]=[];
  ngOnInit(): void {
    this.getOrderList();
  }
  getOrderList(){
    this.productService.getOrder().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(orders => {
       this.order = orders;
    //  console.log(this.order);
      for(var k in orders){
        console.log(orders[k].itemId);
        this.productService.getProductKey(orders[k].itemId).subscribe(o => {
            console.log(o);
           // this.order = o;
           this.snipper=false;
            this.detail.push(o);
            console.log(this.detail);
            
        });
      }
    });
  }



  
}
