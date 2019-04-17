import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  addEmployee: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addEmployee = this.formBuilder.group({
      username : new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern('[a-z0-9]+@[a-z].[a-z]{3}$')]),
      password: new FormControl("", [Validators.required]),
      repassword: new FormControl("", [Validators.required])
    });
  }

}