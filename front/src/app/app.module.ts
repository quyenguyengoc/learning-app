import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";

import { routes } from './app-routing.module';
import { LoginAuthorizeService } from './services/login-authorize.service';

import { AppComponent } from './app.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'localhost:3000'],
        blacklistedRoutes: [environment.apiUrl + '/login']
      }
    })
  ],
  providers: [
    LoginAuthorizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
