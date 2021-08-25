import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
  /**
   * @description - delete the selected employee
   * @param id 
   * @returns - 
   */
  onDelete(id: Number) {
    this.employeeService.onDelete(id);
  }

}
