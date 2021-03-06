import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ComponentsModule
  ],exports:[ComponentsModule],
  providers:[HttpService,UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true,
  },]
})
export class SharedModule { }
