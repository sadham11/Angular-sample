import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit,OnChanges {

  @Input('formGroup')
  formgroup: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.formgroup)
  }

  ngOnInit(): void {
  }

}
