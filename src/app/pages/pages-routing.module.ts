import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './user/profile-management/profile.component';
import { GroupManagementComponent } from './physiotherapist/group-management/group-management.component';
import { UserManagementComponent } from './physiotherapist/user-management/user-management.component';
import { UserAilmentComponent } from './user/user-ailment/user-ailment.component';
import { UserAilmentListComponent } from './user/user-ailment-list/user-ailment-list.component';
import { AilmentManagementComponent } from './physiotherapist/ailment-management/ailment-management.component';
import { GroupManagementListComponent } from './physiotherapist/group-management-list/group-management-list.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'ailment-list',
      component: UserAilmentListComponent,
    },
    {
      path: 'groupsManagement',
      component: GroupManagementListComponent,
    },
    {
      path: 'groupManagement',
      component: GroupManagementComponent,
    },
    {
      path: 'ailment',
      component: UserAilmentComponent,
    },
    {
      path: 'ailment-management',
      component: AilmentManagementComponent,
    },
    {
      path: 'user-management',
      component: UserManagementComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
