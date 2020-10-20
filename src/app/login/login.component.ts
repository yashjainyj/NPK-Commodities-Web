import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'app/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,public user: UserserviceService) { }
  email:string;
  email1:string;
  pass:string;
  spinner:boolean=false;
  ngOnInit(): void {
    console.log("hy");
    if(this.user.authenticated)
    {
        console.log("Log in");
        this.router.navigate(["/dashboard"]);
    }
    else
    {
      console.log("Log out");
    }
   //this.router.navigate(["dashboard"]);
  }

  login(){
    if(this.user.authenticated)
    {
        //console.log("Log in");
         this.user.afAuth.onAuthStateChanged(user=>{
      if(user)
      {
        window.location.reload();
      }
    })
        this.user.login();
        //this.router.navigate(["/dashboard"]);   
    }
    else
    {
      console.log("Log out");
      //this.user.login();
       // this.router.navigate(["/dashboard"]);
    }
  }

  logincre()
  {
    this.spinner = true;
    console.log("hy login" + this.pass);
    if(this.user.authenticated)
    {
        //console.log("Log in");
         this.user.afAuth.onAuthStateChanged(user=>{
      if(user)
      {
        window.location.reload();
      }
    })
    this.user.logincredential(this.email,this.pass);
    this.spinner=false;
        //this.router.navigate(["/dashboard"]);   
    }
       
  }
  forget(){
    this.user.forget(this.email1);
    
  }
}
