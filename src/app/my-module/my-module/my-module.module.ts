import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { GroupManagementComponent } from 'app/pages/physiotherapist/group-management/group-management.component';
import { GroupsManagementComponent } from 'app/pages/physiotherapist/group-management-list/groups-management.component';
import { UserManagementComponent } from 'app/pages/physiotherapist/user-management/user-management.component';
import { ProfileComponent } from 'app/pages/user/profile-management/profile.component';
import { UserAilmentListComponent } from 'app/pages/user/user-ailment-list/user-ailment-list.component';
import { UserAilmentComponent } from 'app/pages/user/user-ailment/user-ailment.component';
import { AilmentManagementComponent } from 'app/pages/physiotherapist/ailment-management/ailment-management.component';



@NgModule({
  declarations: [
     ProfileComponent,
     UserAilmentListComponent,
     GroupsManagementComponent,
     GroupManagementComponent,
     UserAilmentComponent,
     AilmentManagementComponent,
    UserManagementComponent],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbAccordionModule,
    NbListModule,
    ThemeModule,
    NbUserModule,
    NbTabsetModule
  ]
})
export class MyModuleModule { }
