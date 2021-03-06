import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { UserManagementModule } from './user-management/user-management.module';
import { ViewsRoutingModule } from './views.routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,PagesModule,
    UserManagementModule,
    ViewsRoutingModule,RouterModule 
  ]
})
export class ViewsModule { }
