import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/user',
    title: 'User Profile',
    rtlTitle: '',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/user-details',
    title: 'User Details',
    rtlTitle: '',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/icons',
    title: 'Crop Informatics',
    rtlTitle: '',
    icon: 'icon-notes',
    class: ''
  },
  {
    path: '/dashboard',
    title: 'Insurance',
    rtlTitle: '',
    icon: 'icon-satisfied',
    class: ''
  },
  {
    path: '/typography',
    title: 'Fertilizer Calculator',
    rtlTitle: '',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Animal Husbandry',
    rtlTitle: '',
    icon: 'icon-bullet-list-67',
    class: ''
  },
  {
    path: '/maps',
    title: 'Site Suitability',
    rtlTitle: '',
    icon: 'icon-square-pin',
    class: '' },
  // {
  //   path: '/rtl',
  //   title: 'RTL Support',
  //   rtlTitle: '',
  //   icon: 'icon-world',
  //   class: ''
  // }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
