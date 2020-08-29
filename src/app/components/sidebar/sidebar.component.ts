import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
     { path: '/addCommmodities', title: 'Add Commmodities',  icon:'book', class: '' },
     { path: '/orders', title: 'Orders',  icon:'content_paste', class: '' },
     { path: '/userDetails', title: 'User Details',  icon:'library_books', class: '' },
     { path: '/logout', title: 'LogOut',  icon:'logout', class: '' },
    //  { path: '/vblog', title: 'VBlog',  icon:'video_library', class: '' },
    //  { path: '/studymaterial', title: 'Study Material',  icon:'notes', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isMenuOpen = true;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
}
