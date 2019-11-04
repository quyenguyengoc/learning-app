import { Routes, CanActivate } from '@angular/router';

import { RequiredLoginService } from './services/authorize.service'
import { AuthorizeComponent } from './authorize/authorize.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { NotfoundComponent } from './notfound/notfound.component';

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
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    component: NotfoundComponent
  }
];
