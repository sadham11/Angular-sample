import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {
  loading: boolean = false;
  users: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);
        this.users = res?.data;
      },
      (err) => {
        this.loading = false;
        console.error(err);
      }
    );
  }
}
