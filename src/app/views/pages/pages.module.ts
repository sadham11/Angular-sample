import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ContainersModule } from 'src/app/containers/containers.module';



@NgModule({
  declarations: [LoginComponent, HomeComponent,AddEmployeeComponent,ViewEmployeeComponent],
  imports: [
    CommonModule, PagesRoutingModule,FormsModule,SharedModule,RouterModule,ContainersModule
  ]
})
export class PagesModule { }
