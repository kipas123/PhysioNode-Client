import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './user/profile-management/profile.component';
import { UserTreatmentComponent } from './user/user-treatments/user-treatment.component';
import { GroupsManagementComponent } from './physiotherapist/groups-management/groups-management.component';
import { GroupManagementComponent } from './physiotherapist/group-management/group-management.component';
import { TreatmentComponent } from './user/user-treatment/treatment.component';
import { TreatmentManagementComponent } from './physiotherapist/treatment-management/treatment-management.component';

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
      path: 'treatments',
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
      path: 'treatment',
      component: TreatmentComponent,
    },
    {
      path: 'treatment-management',
      component: TreatmentManagementComponent,
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
