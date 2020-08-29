import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { ProductDetails } from 'app/product-details.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  constructor(private productservice:ProductService,private storage : AngularFireStorage) { }
  product : ProductDetails = new ProductDetails();
  save() {
    this.productservice.createProduct(this.product);
    this.product = new ProductDetails();
  }
  downloadURL: Observable< string>;
  onSubmit() {
    //this.submitted = true;   
      const id = Math.random().toString(36).substring(2);
      this.ref = this.storage.ref("productImages/"+id);
      this.task = this.ref.put(this.selectedFile);    
      this.uploadProgress = this.task.percentageChanges();
      //window.alert("Added Successfully")
      this.task.snapshotChanges().pipe(
        finalize(() =>  this.ref.getDownloadURL().subscribe(url => {
          console.log(url); 
          this.product.url=url;
          this.product.imgname = id;
          this.save();
        })
        )
       
      )
      .subscribe();
        
      
      
  }
  ngOnInit(): void {
  }
  uploadProgress: Observable<number>;
 
  selectedFile: File;
  fileinfo:string;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  onFileChanged(event) {
    
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

  onUpload() {
    // upload code goes here
   
  }

 
}
