import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {

    console.log(this.username, this.password);
    this.router.navigateByUrl('home/view-employee')

  }

}
