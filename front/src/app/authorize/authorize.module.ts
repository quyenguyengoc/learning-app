import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AuthRoutes } from './authorize-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../logout/logout.component';
import { LessonComponent } from '../lesson/lesson.component';
import { LessonDetailComponent } from '../lesson-detail/lesson-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    NgbModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    LogoutComponent,
    LessonComponent,
    LessonDetailComponent
  ]
})
export class AuthorizeModule {}
