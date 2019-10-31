import { Routes, CanActivate } from '@angular/router';

import { LoginAuthorizeService } from './services/login-authorize.service'
import { AuthorizeComponent } from './authorize/authorize.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthorizeComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '', loadChildren: './authorize/authorize.module#AuthorizeModule' }
    ]
  },
  {
    path: '',
    canActivate: [LoginAuthorizeService],
    component: UnauthorizeComponent,
    children: [
      { path: 'auth', loadChildren: './unauthorize/unauthorize.module#UnauthorizeModule' }
    ]
  }
];
