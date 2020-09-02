import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { HomeService } from "./services/home.service";
import { ParishComponent } from "./pages/parish/parish.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DioceseComponent } from './diocese/diocese.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParishComponent,
    DioceseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
