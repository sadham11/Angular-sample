import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './views/pages/pages.module';
import { ViewsModule } from './views/views.module';
// import bootstrap from "bootstrap";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    ViewsModule,
    FormsModule ,
    PagesModule,
    ReactiveFormsModule ,
    ComponentsModule,
    RouterModule ,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
