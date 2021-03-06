import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ComponentsModule
  ],exports:[ComponentsModule],
  providers:[HttpService,UserService]
})
export class SharedModule { }
