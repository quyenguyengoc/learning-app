import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AuthRoutes } from './authorize-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../logout/logout.component';
import { LevelComponent } from '../level/level.component';
import { LevelDetailComponent } from '../level-detail/level-detail.component';

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
    LevelComponent,
    LevelDetailComponent
  ]
})
export class AuthorizeModule {}
