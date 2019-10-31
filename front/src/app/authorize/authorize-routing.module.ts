import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];
