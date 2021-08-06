import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { ProfileComponent } from 'app/pages/profile/profile/profile.component';
import { UserTreatmentComponent } from 'app/pages/user-treatment/user-treatment.component';
import { GroupsManagementComponent } from 'app/pages/groups/groups-management/groups-management.component';
import { GroupManagementComponent } from 'app/pages/groups/group-management/group-management.component';
import { ThemeModule } from 'app/@theme/theme.module';



@NgModule({
  declarations: [ProfileComponent, UserTreatmentComponent, GroupsManagementComponent, GroupManagementComponent],
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
  ]
})
export class MyModuleModule { }
