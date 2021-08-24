import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import employees from 'src/app/employees.json'
import { EmployeeDataService } from 'src/app/employee-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public employeeList: { id: number, firstName: string, lastName: string, email: string }[] = employees;
  formValue !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      empId: [''],
      firstName: [''],
      lastName: [''],
      email: ['']
    })
    this.formValue.statusChanges.subscribe(data => {
      console.log(data);
    })
  }
  addEmployee(){
    console.log(this.formValue.value);
    
  }
}
