import { Injectable } from '@angular/core';
import { of as observableOf, Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map,switchMap } from 'rxjs/operators';
import {auth} from 'firebase'; 
import { ReturnStatement } from '@angular/compiler';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  uid = this.afAuth.authState.pipe(map(authState=>{
      if(!authState)
      {
        return null;
      }
      else
      {
      return authState.uid;
      }
      
    
  }),
  );
  userid=null;
  isAdmin:Observable<boolean> = this.uid.pipe(
    switchMap(uid =>{
      if(!uid)
      {
        return observableOf(false);
      }
      else
      {
        return this.db.object<boolean>('/admins/'+uid).valueChanges();
      }
    }),
  );
  user$: Observable<boolean>;
  constructor( public afAuth: AngularFireAuth, private db: AngularFireDatabase,private router :Router) { 
   
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.db.object<boolean>('/admins/'+user.uid).valueChanges();
        } else {
          // Logged out
          return observableOf(false);
        }
      }))
  }
  login(){
     this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
      
  }
  logincredential(email,pass){
    console.log(email+pass);
    
    this.afAuth.signInWithEmailAndPassword(email,pass).catch(err=>{
        console.log(err);
        window.alert(err);
        
    });
  }
  logout(){
    this.afAuth.signOut();
  }
  get authenticated():boolean{
    return this.afAuth.authState!==null;
  }
  forget(email)
  {
    console.log(email);
    
    this.afAuth.sendPasswordResetEmail(email)
    .then(() => alert('Password Reset Email Sent!'))
    .catch((error) => console.log(error))
  }
 // constructor(){}
}
