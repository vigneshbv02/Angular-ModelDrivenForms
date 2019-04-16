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
      
    });
  }

}