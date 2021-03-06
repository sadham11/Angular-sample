import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,

}, {
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: 'add-employee',
      component: AddEmployeeComponent
    },
    {
      path: 'view-employee',
      component: ViewEmployeeComponent
    }
  ]
  // canActivate: [AuthGuard],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
