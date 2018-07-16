import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListUserComponent} from "./list-user/list-user.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: 'list-user', component: ListUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: '', component: ListUserComponent }
];

@NgModule({  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})


export class AppRoutingModule { }
