import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { dataModel } from './model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employeeForm!:FormGroup;
employeeData:undefined|dataModel[];
  constructor(private fb:FormBuilder,private apiService:ApiService) { }

  ngOnInit(): void {
    this.getEmployee()
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }
  addEmployee(data:dataModel){
    this.apiService.addEmployee(data).subscribe((res)=>{
      this.employeeForm.reset()
      this.getEmployee()
    })
    
  }
  getEmployee(){
    this.apiService.getEmployee().subscribe((res)=>{
      this.employeeData = res;
      console.log(this.employeeData)
    })
  }
  deletEmp(id:number){
    this.apiService.deleteEmployee(id).subscribe((res)=>{
      this.getEmployee()
    })
  }
}
