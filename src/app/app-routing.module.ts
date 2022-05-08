import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddComponent } from './components/emp-add/emp-add.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmpListComponent
  },
  {
    path: 'add',
    component: EmpAddComponent
  },
  {
    path: 'update/:id',
    component: EmpAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
