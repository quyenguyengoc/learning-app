import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../logout/logout.component';
import { LessonComponent } from '../lesson/lesson.component';
import { LessonDetailComponent } from '../lesson-detail/lesson-detail.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'lessons',
        children: [
          { path: '', component: LessonComponent },
          { path: ':id', component: LessonDetailComponent },
        ]
      },
      { path: 'logout', component: LogoutComponent }
    ]
  }
];
