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
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { Role } from 'app/objModel/role/role';
import { RegisterComponent } from './auth/register/register.component';
import { UnathorizedComponent } from './alertPages/unathorized/unathorized.component';
import { NotFoundComponent } from './alertPages/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'unathorized',
      component: UnathorizedComponent,
    },
    {
      path: 'not-found',
      component: NotFoundComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.user, Role.admin]}
    },
    {
      path: 'ailment-list',
      component: UserAilmentListComponent,
    },
    {
      path: 'groupsManagement',
      component: GroupManagementListComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.admin]}
    },
    {
      path: 'groupManagement',
      component: GroupManagementComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.admin]}
    },
    {
      path: 'ailment',
      component: UserAilmentComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.user, Role.admin]}
    },
    {
      path: 'ailment-management',
      component: AilmentManagementComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.admin]}
    },
    {
      path: 'user-management',
      component: UserManagementComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.admin]}
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
