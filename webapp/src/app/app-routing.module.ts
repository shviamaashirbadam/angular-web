import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {JavaComponent} from './components/java/java.component'
import {NavbarComponent} from './components/navbar/navbar.component'


export const routes: Routes = [
  { path: 'Navbar', component: NavbarComponent },
  { path: 'java', component: JavaComponent }
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
