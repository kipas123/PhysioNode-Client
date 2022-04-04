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
    if(this.currentUser){
      this.adminRole = false;
    }
    // if(this.currentUser && this.currentUser.userRoleDTO.roleName == "admin"){
    //   this.adminRole = false;
    // }
   
}
  ngOnInit(): void {
    this.menu = [
      {
        title: 'Administrator',
        icon: 'lock-outline',
        hidden: this.adminRole,  
        children: [
          {
            title: 'Profile',
            link: '/pages/profile',
          },
          {
            title: 'Messages',
            link: '/pages/user-messanger',
          },
          {
            title: 'Activation of users',
            link: '/pages/user-activation', 
            hidden: false        
          }
        ],
      },
      {
        title: 'Physiotherapist',
        icon: 'lock-outline',
        hidden: this.adminRole,
        children: [
          {
            title: 'Profile',
            link: '/pages/profile',
          },
          {
            title: 'Messages',
            link: '/pages/user-messanger',
          },
          {
            title: 'Search for a user',
            link: '/pages/findUser',
            hidden: false,
          },
          {
            title: 'Group management',
            link: '/pages/groupsManagement', 
            hidden: false        
          },
          {
            title: 'Visit creator',
            link: '/pages/visit-creator',
          },
          {
            title: 'Visit management',
            link: '/pages/visit-management',
          },
          {
            title: 'Visit history',
            link: '/pages/visit-history',
          }
        ],
      },
      {
        title: 'Coach',
        icon: 'lock-outline',
        hidden: this.adminRole,
        children: [
          {
            title: 'Profile',
            link: '/pages/profile',
          },
          {
            title: 'Messages',
            link: '/pages/user-messanger',
          },
          {
            title: 'Search for a user',
            link: '/pages/findUser',
            hidden: false,
          },
          {
            title: 'Group management',
            link: '/pages/groupsManagement', 
            hidden: false        
          }
        ],
      },
      {
        title: 'Athlete',
        icon: 'lock-outline',
        hidden: this.adminRole,
        children: [
          {
            title: 'Profile',
            link: '/pages/profile',
          },
          {
            title: 'Messages',
            link: '/pages/user-messanger',
          },
          {
            title: 'Motor Documentation',
            link: '/pages/exercise-list',
          },
          {
            title: 'Medical documentation',
            link: '/pages/ailment-list',
          },
          {
            title: 'Make an appointment',
            link: '/pages/search-service-provider',
            hidden: false,
          },
          {
            title: 'My visit',
            link: '/pages/my-visit',
          }
          
        ],
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Log in',
            link: '/pages/login',
          },
          {
            title: 'Reset password',
            link: '/pages/password-reset',
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
