import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  users: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((res:any)=> {
      console.log(res)
      this.users = res?.data;
    }, err => {
      console.error(err)
    });
  }
}
