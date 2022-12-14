import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StepNavComponent } from './step-nav/step-nav.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    StepNavComponent,
  ],  
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/