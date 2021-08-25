import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      id: 1,
      firstName: "Rishi",
      lastName: "Butte",
      email: "Rishi@gmail.com"
    },
    {
      id: 2,
      firstName: "Asawari",
      lastName: "Tajne",
      email: "Asawari@gmail.com"
    },
    {
      id: 3,
      firstName: "Mohini",
      lastName: "Morghade",
      email: "Mohini@gmail.com"
    }
  ];
  constructor() { }

  /**
   * @description - to get employees in the list
   * @param - 
   * @returns - list of employees
   */
  onGet() {
    return this.employees;
  }

  /**
   * @description - push newly added employee in list
   * @param - employee of type Employee
   * 
   */
  onAdd(employee: Employee) {
    this.employees.push(employee);
  }

  /**
   * @description - delete employee from the list
   * @param - id of type Number
   */

  onDelete(id: Number) {
    let employee = this.employees.find(x => x.id === id)!;
    let index = this.employees.indexOf(employee, 0);
    this.employees.splice(index, 1);
  }

  /**
   * @description - fetch details of employee when click on update button
   * @param - id 
   * @returns - details of selected employee
   */
  onGetEmployee(id: Number) {
    return this.employees.find(x => x.id === id)!;
  }

  /**
   * @description - update the new value for employee
   * @param - employee 
   * @returns - updated value of employee
   */
  onUpdate(employee: Employee) {
    let oldEmployee = this.employees.find(x => x.id === employee.id)!;
    oldEmployee.firstName = employee.firstName;
    oldEmployee.lastName = employee.lastName;
    oldEmployee.email = employee.email;
  }
}
