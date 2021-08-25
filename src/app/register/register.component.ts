import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id?: number;
  header?: string;
  employee: Employee = {
    id: 0,
    firstName: "",
    lastName: "",
    email: ""
  }

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = +!this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Employee' : 'Update Employee';

    if (this.id != 0) {
      this.employee = this.employeeService.onGetEmployee(this.id);
    }
  }

  /**
   * @description - save the newly added employee to the list 
   * @param form 
   * @returns - updated list with new employee
   */
  onSubmit(form: NgForm) {
    let employee: Employee = {
      id: form.value.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
    }
    if (this.id === 0) {
      this.employeeService.onAdd(employee);
    }
    else {
      this.employeeService.onUpdate(employee);
    }
    this.router.navigateByUrl('');
  }

  /**
   * @description - navigate to the list component
   */
  cancelFun() {
    this.router.navigateByUrl('list');
  }
}
