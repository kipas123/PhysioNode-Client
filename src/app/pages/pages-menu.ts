import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
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
    title: 'Profil',
    link: '/pages/profile',
  },
  {
    title: 'Moje leczenie',
    link: '/pages/ailment-list',
  },
  {
    title: 'Zarzadzaj uzytkownikiem',
    link: '/pages/user-management',
  },
  {
    title: 'Zarzadzanie leczeniem',
    link: '/pages/ailment-management',
  },
  {
    title: 'Zarządzanie grupami',
    link: '/pages/groupsManagement',          
  },
  {
    title: 'Zarządzanie grupą',
    link: '/pages/groupManagement',          
  },
  {
    title: 'Choroba',
    link: '/pages/ailment',          
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
        title: 'Zarejestruj',
        link: '/pages/register',
      },
      {
        title: 'Zresetuj hasło',
        link: '/auth/reset-password',
      },
    ],
  },
];
