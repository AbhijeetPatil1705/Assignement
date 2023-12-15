import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'list',component:ListEmployeeComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'fruit',redirectTo:'fruit/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
