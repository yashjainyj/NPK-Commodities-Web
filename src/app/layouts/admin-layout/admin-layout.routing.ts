import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
 //import { OldbooksComponent } from '../../oldbooks/oldbooks.component';
 import { EquipmentsComponent } from '../../equipments/equipments.component';
 //import { QnaComponent } from '../../qna/qna.component';
import { OrdersComponent } from 'app/orders/orders.component';
import { UserdetailsComponent } from 'app/userdetails/userdetails.component';
import { LogoutComponent } from 'app/logout/logout.component';
import { AuthGuard } from 'app/core/auth.guard';
import { LoginComponent } from 'app/login/login.component';

//  import { VblogComponent  } from '../../vblog/vblog.component';
//  import { StudymaterialComponent } from '../../studymaterial/studymaterial.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, 
   // {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[AuthGuard] },
     { path: 'addCommmodities',     component: EquipmentsComponent },
     { path: 'orders',     component: OrdersComponent },
     { path: 'userDetails',     component: UserdetailsComponent},
     { path: 'logout',     component: LogoutComponent },
     { path: 'login',     component: LoginComponent },
     
     //  { path: 'qna',     component: QnaComponent },
     //   { path: 'oldbooks',   component: OldbooksComponent },
    // { path: 'vblog',          component: VblogComponent },
    //  { path: 'studymaterial',           component: StudymaterialComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
