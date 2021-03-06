import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  getUsers(){
    return this.httpService.getServiceForList('api/users');
  }
}
