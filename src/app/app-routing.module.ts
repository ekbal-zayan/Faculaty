import { HomeComponent } from './home/home.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path : '' , component :HomeComponent},
  { path : 'header',component :HeaderComponent},
  { path : 'slider',component :SliderComponent},
  { path : 'details',component :StudentDetailsComponent},
  { path : 'addEdit',component :AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
