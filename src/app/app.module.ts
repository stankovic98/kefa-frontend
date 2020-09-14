import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { HomeService } from "./services/home.service";
import { ParishComponent } from "./pages/parish/parish.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DioceseComponent } from './pages/diocese/diocese.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import {AuthService} from './services/auth/auth.service';
import {AuthGuard} from './services/auth/helpers/auth.guard';
import { FormsModule } from '@angular/forms';
import {AdminService} from './services/admin/admin.service';
import {JwtInterceptor} from './services/auth/helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParishComponent,
    DioceseComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule
  ],
  providers: [
    HomeService, 
    AuthService, 
    AuthGuard, 
    AdminService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
