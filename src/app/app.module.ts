import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckDeleteEmployeeComponent } from './check-delete-employee/check-delete-employee.component';




@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    CheckDeleteEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
