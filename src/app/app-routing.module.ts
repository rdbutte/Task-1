import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: "full"
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list/add/:id',
    component: RegisterComponent
  },
  {
    path: 'list/edit/:id',
    component: RegisterComponent
  },
  {
    path:'list/view/:id',
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
