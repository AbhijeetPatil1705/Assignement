import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { dataModel } from '../list-employee/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
public dataId!:number;
employeeFetchData!:dataModel;
  constructor(private apiService:ApiService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((res:Params)=>{
         this.dataId = res['get']("id");
         console.log(this.dataId)
    })
    this.apiService.fetchEmployee(this.dataId).subscribe((res:dataModel)=>{
        this.employeeFetchData = res
        console.log(this.employeeFetchData)
    })
  }
  updateEmp(){
    this.apiService.updateEmployee(this.employeeFetchData,this.dataId).subscribe((res)=>{
    this.router.navigate(["/"]);
    })
  }

}
