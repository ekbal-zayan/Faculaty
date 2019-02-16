//Angular Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import * as _$ from 'jquery';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';


//Angular Service
import { DataGetService } from './data-get.service';

//Angular App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    StudentDetailsComponent,
    AddEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
