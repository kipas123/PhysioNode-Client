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
            title: 'Profil',
            link: '/pages/profile',
          },
          {
            title: 'Wiadomości',
            link: '/pages/user-messanger',
          },
          {
            title: 'Aktywacja użytkowników',
            link: '/pages/user-activation', 
            hidden: false        
          }
        ],
      },
      {
        title: 'Fizjoterapeuta',
        icon: 'lock-outline',
        hidden: this.adminRole,
        children: [
          {
            title: 'Profil',
            link: '/pages/profile',
          },
          {
            title: 'Wiadomości',
            link: '/pages/user-messanger',
          },
          {
            title: 'Wyszukaj użytkownika',
            link: '/pages/findUser',
            hidden: false,
          },
          {
            title: 'Zarządzanie grupami',
            link: '/pages/groupsManagement', 
            hidden: false        
          },
          {
            title: 'Kreator Wizyt',
            link: '/pages/visit-creator',
          },
          {
            title: 'Zarządzaj wizytami',
            link: '/pages/visit-management',
          },
          {
            title: 'Historia wizyt',
            link: '/pages/visit-history',
          }
        ],
      },
      {
        title: 'Trener',
        icon: 'lock-outline',
        hidden: this.adminRole,
        children: [
          {
            title: 'Profil',
            link: '/pages/profile',
          },
          {
            title: 'Wiadomości',
            link: '/pages/user-messanger',
          },
          {
            title: 'Wyszukaj użytkownika',
            link: '/pages/findUser',
            hidden: false,
          },
          {
            title: 'Zarządzanie grupami',
            link: '/pages/groupsManagement', 
            hidden: false        
          }
        ],
      },
      {
        title: 'Zawodnik',
        icon: 'lock-outline',
        hidden: this.adminRole,
        children: [
          {
            title: 'Profil',
            link: '/pages/profile',
          },
          {
            title: 'Wiadomości',
            link: '/pages/user-messanger',
          },
          {
            title: 'Dokumentacja motoryczna',
            link: '/pages/exercise-list',
          },
          {
            title: 'Dokumentacja medyczna',
            link: '/pages/ailment-list',
          },
          {
            title: 'Zapisz się na wizytę',
            link: '/pages/search-service-provider',
            hidden: false,
          },
          {
            title: 'Moje wizyty',
            link: '/pages/my-visit',
          }
          
        ],
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Zaloguj',
            link: '/pages/login',
          },
          {
            title: 'Zrestuj hasło',
            link: '/pages/password-reset',
          },
          {
            title: 'Zarejestruj',
            link: '/pages/register',
          }
        ],
      },
    ];
}
}
