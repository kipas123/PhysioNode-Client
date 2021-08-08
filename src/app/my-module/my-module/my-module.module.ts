import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbSidebarModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { GroupManagementComponent } from 'app/pages/physiotherapist/group-management/group-management.component';
import { GroupsManagementComponent } from 'app/pages/physiotherapist/groups-management/groups-management.component';
import { ProfileComponent } from 'app/pages/user/profile-management/profile.component';
import { TreatmentComponent } from 'app/pages/user/user-treatment/treatment.component';
import { UserTreatmentComponent } from 'app/pages/user/user-treatments/user-treatment.component';



@NgModule({
  declarations: [ProfileComponent, UserTreatmentComponent, GroupsManagementComponent, GroupManagementComponent, TreatmentComponent],
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
