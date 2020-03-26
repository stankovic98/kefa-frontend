import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { GospelComponent } from "./components/gospel/gospel.component";
import { HomeService } from "./services/home.service";
import { JurisdictionLevelComponent } from "./components/jurisdiction-level/jurisdiction-level.component";
import { FeaturedTextComponent } from "./components/featured-text/featured-text.component";
import { LatinQuoteComponent } from "./components/latin-quote/latin-quote.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GospelComponent,
    JurisdictionLevelComponent,
    FeaturedTextComponent,
    LatinQuoteComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
