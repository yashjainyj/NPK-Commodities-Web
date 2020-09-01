import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { EquipmentsComponent } from 'app/equipments/equipments.component';
import { OrdersComponent } from 'app/orders/orders.component';
import { UserdetailsComponent } from 'app/userdetails/userdetails.component';
import { LogoutComponent } from 'app/logout/logout.component';
import { LoginComponent } from 'app/login/login.component';
import { SpinnerComponent } from 'app/spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    // UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent,
    // OldbooksComponent,
    EquipmentsComponent,
    SpinnerComponent,
    OrdersComponent,
    UserdetailsComponent,
    LogoutComponent,
    
    // VblogComponent,
    // StudymaterialComponent,
  ]
})

export class AdminLayoutModule {}
