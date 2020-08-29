import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'app/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public user: UserserviceService, private router: Router) { }

  ngOnInit(): void {
     this.user.logout();
     this.router.navigate(['login']);
     window.alert("Logot Successfully");
  }

}
