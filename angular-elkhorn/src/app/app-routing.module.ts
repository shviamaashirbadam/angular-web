import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { AboutmeComponent } from './aboutme/aboutme.component';



export const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'navbar', component: NavigationComponent},
  {path: 'notes', component:NotesComponent},
  {path: 'addtask',component:AddtaskComponent},
  {path: 'java',component:AddtaskComponent},
  {path: 'hibernate',component:AddtaskComponent},
  {path: 'aboutme',component:AboutmeComponent}
 
  
   
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
