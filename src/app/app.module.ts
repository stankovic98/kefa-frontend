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
import { ParishComponent } from "./pages/parish/parish.component";
import { BannerComponent } from "./components/banner/banner.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GospelComponent,
    JurisdictionLevelComponent,
    FeaturedTextComponent,
    LatinQuoteComponent,
    FooterComponent,
    ParishComponent,
    BannerComponent,
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
