import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ParishComponent } from "./pages/parish/parish.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "parish",
    component: ParishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
