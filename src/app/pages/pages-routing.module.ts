import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { UserTreatmentComponent } from './user-treatment/user-treatment.component';
import { GroupsManagementComponent } from './groups/groups-management/groups-management.component';
import { GroupManagementComponent } from './groups/group-management/group-management.component';

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
      path: 'treatment',
      component: UserTreatmentComponent,
    },
    {
      path: 'groupsManagement',
      component: GroupsManagementComponent,
    },
    {
      path: 'groupManagement',
      component: GroupManagementComponent,
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
