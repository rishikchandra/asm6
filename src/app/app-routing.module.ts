import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';


const routes: Routes = [
  {path:'',redirectTo:'/empadd',pathMatch:'full'},
  {path:'emplist',component:EmplistComponent},
  {path:'empadd',component:EmpaddComponent},
  {path:'empedit/:id',component:EmpeditComponent},
  {path:'empdetails',component:EmpdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
