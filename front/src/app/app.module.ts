import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

import { SpinnerInterCeptor } from './spinner-interceptor';
import { environment } from 'src/environments/environment';
import { NotfoundComponent } from './notfound/notfound.component';

export function tokenGetter() {
  return localStorage.getItem('user_token');
}

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeComponent,
    UnauthorizeComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'localhost:3000'],
        blacklistedRoutes: [environment.apiUrl + '/login']
      }
    }),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'bottom'
        }
      },
      behaviour: {
        showDismissButton: false
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterCeptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
