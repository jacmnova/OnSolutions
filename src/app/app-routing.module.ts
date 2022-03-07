import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuardService} from "../../services/security/auth-guard.service";
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthGuardService]}
  // { path: 'dashboard', component: DashboardComponent},
  // { path: 'dashboard-admin', component: DashboardAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
