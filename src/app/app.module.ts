import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GospelComponent } from './components/gospel/gospel.component';
import { HomeService } from './services/home.service';
import { JurisdictionSelectComponent } from './components/jurisdiction-select/jurisdiction-select.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GospelComponent,
    JurisdictionSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
