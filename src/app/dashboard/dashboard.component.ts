import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { UserserviceService } from 'app/userservice.service';
import { ProductService } from 'app/product.service';
import { map, finalize } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { ProductDetails } from 'app/product-details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
finished=false;
spinner:boolean = true;
productUpdate : ProductDetails = new ProductDetails();
uploadProgress: Observable<number>;
 
selectedFile: File;
fileinfo:string;
ref: AngularFireStorageReference;
files=false;
task: AngularFireUploadTask;
onFileChanged(event) {
  this.files=true;
  this.selectedFile = event.target.files[0]
  function formatBytes(bytes: number): string {
    const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1024;
    let index = 0;

    while (bytes >= factor) {
      bytes /= factor;
      index++;
    }
   
    return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
  }
  this.fileinfo = this.selectedFile.name + " " + formatBytes(this.selectedFile.size);
}
save() {
  this.productService.updateProduct(this.ukey,this.productUpdate);
  this.productUpdate = new ProductDetails();
}
onSubmit() {
  //this.submitted = true;   
   
    if(this.files)
    {
      const id = Math.random().toString(36).substring(2);
      this.ref = this.storage.ref("productImages/"+id);
      this.task = this.ref.put(this.selectedFile);    
      this.uploadProgress = this.task.percentageChanges();
      //window.alert("Added Successfully")
      this.task.snapshotChanges().pipe(
        finalize(() =>  this.ref.getDownloadURL().subscribe(url => {
          console.log(url); 
          this.productUpdate.url=url;
          this.storage.ref("/productImages").child(this.uname).delete();
          this.productUpdate.imgname = id;
          this.save();
        })
        )
       
      )
      .subscribe();
        
      
    }
    else
    {
      this.save();
    }
    
    
}


  constructor(public productService:ProductService,private storage : AngularFireStorage) { }
  product :any;
  ngOnInit() {
    this.getProductList();
  }
getProductList() {
    this.productService.getProoduct().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(products => {
      this.product = products;
      this.finished=true;
      this.spinner=false;
      console.log(this.product);
    });
  }

  deleteProduct() {
   // console.log(key + "df");
   
    this.productService.deleteProduct(this.key).catch(err => console.log(err));
    this.storage.ref("/productImages").child(name).delete();
  }
  key:string;
  name:string;
 store(key,name)
 {
    this.key = key;
    this.name=name;
 }
 ukey:string;
  uname:string;
 storeupdate(key,name)
 {
    this.ukey = key;
    
    this.uname=name;
 }
}
