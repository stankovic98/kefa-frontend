import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ParishComponent } from "./pages/parish/parish.component";
import {DioceseComponent} from './pages/diocese/diocese.component';
import {LoginComponent} from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {AuthGuard} from './services/auth/helpers/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":dioceseID",
    component: ParishComponent
  },
  {
    path: ":dioceseID/:parishID",
    component: ParishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
