import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { OrderDetails } from './order-details.model';
import { Observable } from 'rxjs';
import { UserDetail } from './user-detail.model';
import { MemberDetails } from './member-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/products';
  private dbPathOrder = '/allOrders';
  private dbPathUser= '/users';
  orderRef : AngularFireList<OrderDetails> = null;
  productRef: AngularFireList<ProductDetails> = null;
  userDetailRef: AngularFireList<UserDetail> = null;
  orderDetails:Observable<any>;
  private storage : AngularFireStorage;
  constructor(private db: AngularFireDatabase) {
    this.productRef = db.list(this.dbPath);
    this.orderRef = db.list(this.dbPathOrder);
    this.userDetailRef = db.list(this.dbPathUser);
  }
  createProduct(product: ProductDetails): void {
    
    var a = this.productRef.push(product).key;
    this.productRef.update(a,{key:a});
  }

  getProoduct(): AngularFireList<ProductDetails> {
    return this.productRef;
  }
  getUser(): AngularFireList<UserDetail> {
    return this.userDetailRef;
  }
  getOrder(): AngularFireList<OrderDetails> {
    return this.orderRef;
  }
  getProductKey(key:string){
    return  this.db.object('/products/'+key).valueChanges();
    
  }

  deleteProduct(key: string): Promise<void> {
    return this.productRef.remove(key);
  }

  updateProduct(key: string, value: any): Promise<void> {
    return this.productRef.update(key, value);
  }
  getUserOrder(key:string) :AngularFireList<OrderDetails> {
    return this.db.list("users/"+key+"/orders/");
  }
  getUserMember(key:string) :AngularFireList<MemberDetails> {
    return this.db.list("users/"+key+"/memberDetails");
  }
}
