import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
 import { OldbooksComponent } from '../../oldbooks/oldbooks.component';
 import { EquipmentsComponent } from '../../equipments/equipments.component';
 import { QnaComponent } from '../../qna/qna.component';
 import { VblogComponent  } from '../../vblog/vblog.component';
 import { StudymaterialComponent } from '../../studymaterial/studymaterial.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
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
    { path: 'dashboard',      component: DashboardComponent },
     { path: 'oldbooks',   component: OldbooksComponent },
     { path: 'equipments',     component: EquipmentsComponent },
     { path: 'qna',     component: QnaComponent },
    { path: 'vblog',          component: VblogComponent },
     { path: 'studymaterial',           component: StudymaterialComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
