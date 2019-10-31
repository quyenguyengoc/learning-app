import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UnauthRoutes } from './unauthorize-routing.module';

import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UnauthRoutes),
    NgbModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UnauthorizeModule {}
