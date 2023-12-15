import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataModel } from './list-employee/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addEmployee(data:dataModel){
  return this.http.post<dataModel>('http://localhost:3000/posts',data);
  }
  getEmployee(){
    return this.http.get<dataModel[]>('http://localhost:3000/posts');
    }
  fetchEmployee(id:number){
return this.http.get<dataModel>('http://localhost:3000/posts/'+id);
  }
  updateEmployee(data:dataModel,id:number){
    return this.http.put('http://localhost:3000/posts/'+id,data)
  }
  deleteEmployee(id:number){
    return this.http.delete('http://localhost:3000/posts/'+id)
  }

}
