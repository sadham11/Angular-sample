import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {


  addUserForm: FormGroup = this.formBuilder.group({});;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'fname': [null, Validators.required],
      'lname': [null, Validators.required],
      'address': this.formBuilder.group({ // make a nested group
        addressLine1: ['', [Validators.required]],
        addressLine2: ['', [Validators.required]],
        city: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
      }),
    });
  }

  submit() {
    console.log(this.addUserForm.valid);
  }

}
