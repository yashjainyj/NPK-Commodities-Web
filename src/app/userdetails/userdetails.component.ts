import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { map, finalize } from 'rxjs/operators';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private productService : ProductService) { }
  user:any;
  listFilter:string =""
  order:any;
  snipper:boolean = true;
  snipper1:boolean = true;
  detail  : any[]=[];
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(){
    this.productService.getUser().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(user => {
      this.snipper = false;
      this.user = user;
      console.log(user);
    });
  }
  getOrders(key){
    console.log("Hy" + key);
    
    this.productService.getUserOrder(key).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(order => {
      this.order = order;
      console.log(order);
      for(let n in order)
      {
          console.log(order[n].itemId);
          this.productService.getProductKey(order[n].itemId).subscribe(o => {
            console.log(o);
           // this.order = o;
           this.snipper1=false;
            this.detail.push(o);
            console.log(this.detail);
        });
      }
    });
  }
  member :any;
  getMember(key)
  {
    this.productService.getUserMember(key).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(member => {
      this.member = member;
      this.snipper1=false;
      console.log(member);

    });
  }
}
