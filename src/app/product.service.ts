import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/products';
  productRef: AngularFireList<ProductDetails> = null;
  private storage : AngularFireStorage;
  constructor(private db: AngularFireDatabase) {
    this.productRef = db.list(this.dbPath);
  }
  createProduct(product: ProductDetails): void {
    this.productRef.push(product);
  }

  getProoduct(): AngularFireList<ProductDetails> {
    return this.productRef;
  }

  deleteProduct(key: string): Promise<void> {
    return this.productRef.remove(key);
  }

  updateProduct(key: string, value: any): Promise<void> {
    return this.productRef.update(key, value);
  }
}
