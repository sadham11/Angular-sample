import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, PersonFormComponent, AddressFormComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule
  ],
  exports:[HeaderComponent, SidebarComponent, PersonFormComponent, AddressFormComponent ]
})
export class ComponentsModule { }
