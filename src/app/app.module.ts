import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GospelComponent } from './components/gospel/gospel.component';
import { HomeService } from './services/home.service';
import { JurisdictionLevelComponent } from './components/jurisdiction-level/jurisdiction-level.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GospelComponent,
    JurisdictionLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
