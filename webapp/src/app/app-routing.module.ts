import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {JavaComponent} from './components/java/java.component'


export const routes: Routes = [
  { path: 'Java', component: JavaComponent }
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
