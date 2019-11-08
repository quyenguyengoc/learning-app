import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../logout/logout.component';
import { LevelComponent } from '../level/level.component';
import { LevelDetailComponent } from '../level-detail/level-detail.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'levels',
        children: [
          { path: '', component: LevelComponent },
          { path: ':id', component: LevelDetailComponent },
        ]
      },
      { path: 'logout', component: LogoutComponent }
    ]
  }
];
