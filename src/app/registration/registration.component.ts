import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  hide: boolean = true;
  selectFormControl = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit() {
  }

}
