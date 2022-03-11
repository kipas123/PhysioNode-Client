import { NgModule } from '@angular/core';
import { ThemeModule } from 'app/@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { VisitCreatorComponent } from 'app/pages/visit_system/physiotherapist/visit-creator/visit-creator.component';
import { PagesRoutingModule } from 'app/pages/pages-routing.module';
import { NbAccordionModule, NbAlertModule, NbButtonModule, NbCalendarModule, NbCardModule, NbInputModule, NbListModule, NbMenuModule, NbSelectModule } from '@nebular/theme';
import { SearchServiceProviderComponent } from 'app/pages/visit_system/client/search-service-provider/search-service-provider.component';
import { GetAppointmentComponent } from 'app/pages/visit_system/client/get-appointment/get-appointment.component';
import { VisitManagementComponent } from 'app/pages/visit_system/physiotherapist/visit-management/visit-management.component';
import { MyVisitComponent } from 'app/pages/visit_system/client/my-visit/my-visit.component';
import { VisitHistoryComponent } from 'app/pages/visit_system/physiotherapist/visit-history/visit-history.component';



@NgModule({
  declarations: [
      VisitCreatorComponent,
      SearchServiceProviderComponent,
      GetAppointmentComponent,
      VisitManagementComponent,
      MyVisitComponent,
      VisitHistoryComponent
  ],
  imports: [
    FormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbCalendarModule,
    NbInputModule,
    NbAccordionModule,
    NbAlertModule,
    NbAccordionModule
  ]
})
export class MyModuleModule { }
