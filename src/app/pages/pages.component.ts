import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{
  menu: NbMenuItem[];
  currentUser: UserReadModel;
  adminRole:boolean = true;

  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      //this.router.navigate(['/pages/login']);
    }
    if(this.currentUser && this.currentUser.userRoleDTO.roleName == "admin"){
      this.adminRole = false;
    }
   
}
  ngOnInit(): void {
    this.menu = [
      {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/dashboard',
        home: true,
      },
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Wyszukaj użytkownika',
        link: '/pages/findUser',
        hidden: this.adminRole 
      },
      {
        title: 'Profil',
        link: '/pages/profile',
      },
      {
        title: 'Moje leczenie',
        link: '/pages/ailment-list',
      },
      {
        title: 'Zarządzanie grupami',
        link: '/pages/groupsManagement', 
        hidden: this.adminRole         
      },
      {
        title: 'Aktywacja użytkowników',
        link: '/pages/user-activation', 
        hidden: this.adminRole         
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/pages/login',
          },
          {
            title: 'ResetPassword',
            link: '/pages/password-reset',
          },
          {
            title: 'ResetPasswordChange',
            link: '/pages/password-reset-change/222',
          },
          {
            title: 'Register',
            link: '/pages/register',
          }
        ],
      },
    ];
}
}
