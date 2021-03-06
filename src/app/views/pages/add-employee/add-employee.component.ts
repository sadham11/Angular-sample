import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  loading: boolean = false;
  addUserForm: FormGroup = this.formBuilder.group({});
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,private router:Router
  ) {}

  ngOnInit(): void {
    this.intializeForm();
  }

  intializeForm() {
    this.addUserForm = this.formBuilder.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      address: this.formBuilder.group({
        // make a nested group
        addressLine1: ['', [Validators.required]],
        addressLine2: ['', [Validators.required]],
        city: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
      }),
    });
  }

  submit() {
    console.log(this.addUserForm.getRawValue());
    this.loading = true;
    this.userService.addUsers(this.addUserForm.getRawValue()).subscribe(
      (resp) => {
        console.log(resp);
        this.loading = false;
        //show notification and clear form
        window.alert('added successfully!');
        this.intializeForm();
        // this.router.navigateByUrl('home/view-employee')
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }
}
