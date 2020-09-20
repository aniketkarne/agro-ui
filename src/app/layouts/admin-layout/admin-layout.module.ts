import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { UserDetailsComponent } from '../../pages/user-details/user-details.component';

import { TablesComponent } from '../../pages/tables/tables.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
// import { RtlComponent } from '../../pages/rtl/rtl.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CropAdvisoryComponent} from "../../pages/crop-advisory/crop-advisory.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    LeafletModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    UserDetailsComponent,
    CropAdvisoryComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
