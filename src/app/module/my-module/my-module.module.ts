import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbAlertModule, NbButtonModule, NbCardModule, NbChatModule, NbDatepickerModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { GroupManagementComponent } from 'app/pages/physiotherapist&coach/group-management/group-management.component';
import { UserManagementComponent } from 'app/pages/physiotherapist&coach/user-management/user-management.component';
import { ProfileComponent } from 'app/pages/user/profile-management/profile.component';
import { UserAilmentListComponent } from 'app/pages/user/user-ailment-list/user-ailment-list.component';
import { UserAilmentComponent } from 'app/pages/user/user-ailment/user-ailment.component';
import { AilmentManagementComponent } from 'app/pages/physiotherapist&coach/ailment-management/ailment-management.component';
import { GroupManagementListComponent } from 'app/pages/physiotherapist&coach/group-management-list/group-management-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'app/pages/auth/login/login.component';
import { RegisterComponent } from 'app/pages/auth/register/register.component';
import { UnathorizedComponent } from 'app/pages/alertPages/unathorized/unathorized.component';
import { NotFoundComponent } from 'app/pages/alertPages/not-found/not-found.component';
import { UserActivationComponent } from 'app/pages/admin/user-activation/user-activation.component';
import { FindUserComponent } from 'app/pages/physiotherapist&coach/find-user/find-user.component';
import { MessengerComponent } from 'app/components/messenger/messenger.component';
import { PasswordResetComponent } from 'app/pages/auth/password-reset/password-reset.component';
import { PasswordResetChangeComponent} from 'app/pages/auth/pasword-reset-change/pasword-reset-change.component';
import { FileManagerComponent } from 'app/components/file-manager/file-manager.component';
import { UserMessengerComponent } from 'app/pages/user/user-messenger/user-messenger.component';
import { ExerciseManagementComponent } from 'app/pages/physiotherapist&coach/exercise-management/exercise-management.component';



@NgModule({
  declarations: [
     ProfileComponent,
     UserAilmentListComponent,
     GroupManagementListComponent,
     GroupManagementComponent,
     UserAilmentComponent,
     AilmentManagementComponent,
     UserManagementComponent,
     LoginComponent,
     RegisterComponent,
     UnathorizedComponent,
     NotFoundComponent,
     UserActivationComponent,
     FindUserComponent,
    TestComponent,
MessengerComponent,
PasswordResetComponent,
PasswordResetChangeComponent,
FileManagerComponent,
UserMessengerComponent,
ExerciseManagementComponent],
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
    NbTabsetModule,
    NbSpinnerModule,
    FormsModule,
    NbAlertModule,
    NbChatModule
  ]
})
export class MyModuleModule { }
