import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseService } from './services/course.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({

  /**
   * All imported components are declared here 
   */
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ViewComponent,
    AllComponent,
    AddComponent,
    EditComponent
  ],

  /**
   * other imported modules 
   */
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [CourseService],
  bootstrap: [AppComponent]

})
export class AppModule { }
