import { Routes, CanActivate } from '@angular/router';

import { RequiredLoginService } from './services/authorize.service'
import { AuthorizeComponent } from './authorize/authorize.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [RequiredLoginService],
    component: AuthorizeComponent,
    children: [
      { path: '', loadChildren: './authorize/authorize.module#AuthorizeModule' }
    ]
  },
  {
    path: '',
    canActivate: [RequiredLoginService],
    component: UnauthorizeComponent,
    children: [
      { path: 'auth', loadChildren: './unauthorize/unauthorize.module#UnauthorizeModule' }
    ]
  }
];
